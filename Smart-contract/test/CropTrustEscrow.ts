import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("CropTrustEscrow", function () {
  async function deployContracts() {
    const [owner, arbitrator, buyer, farmer] = await ethers.getSigners();

    const MockUSDT = await ethers.getContractFactory("MockERC20");
    const usdt = await MockUSDT.deploy("Mock USDT", "mUSDT");

    const CropTrustEscrow = await ethers.getContractFactory("CropTrustEscrow");
    const escrow = await CropTrustEscrow.deploy(arbitrator.address, await usdt.getAddress());

    await usdt.transfer(buyer.address, 1000);

    return { escrow, usdt, owner, arbitrator, buyer, farmer };
  }

  it("Should create a new escrow", async function () {
    const { escrow, usdt, buyer, farmer } = await deployContracts();

    const listingId = 1;
    const amount = 100;

    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);

    await expect(escrow.connect(buyer).createEscrow(farmer.address, listingId, amount))
      .to.emit(escrow, "EscrowCreated")
      .withArgs(1, buyer.address, farmer.address, amount, listingId);

    const escrowData = await escrow.escrows(1);
    expect(escrowData.buyer).to.equal(buyer.address);
    expect(escrowData.farmer).to.equal(farmer.address);
    expect(escrowData.amount).to.equal(amount);

    const escrowBalance = await usdt.balanceOf(await escrow.getAddress());
    expect(escrowBalance).to.equal(amount);
  });

  it("Should allow the buyer to confirm delivery", async function () {
    const { escrow, usdt, buyer, farmer } = await deployContracts();
    const amount = 100;
    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);
    await escrow.connect(buyer).createEscrow(farmer.address, 1, amount);

    await expect(escrow.connect(buyer).confirmDelivery(1))
      .to.emit(escrow, "DeliveryConfirmed").withArgs(1)
      .to.emit(escrow, "FundsReleased").withArgs(1, farmer.address, amount);

    const escrowData = await escrow.escrows(1);
    expect(escrowData.state).to.equal(1); // COMPLETED

    const farmerBalance = await usdt.balanceOf(farmer.address);
    expect(farmerBalance).to.equal(amount);
  });

  it("Should allow for auto-release of funds after the delay", async function () {
    const { escrow, usdt, buyer, farmer } = await deployContracts();
    const amount = 100;
    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);
    await escrow.connect(buyer).createEscrow(farmer.address, 1, amount);

    await ethers.provider.send("evm_increaseTime", [48 * 60 * 60]); // 48 hours

    await expect(escrow.autoRelease(1))
      .to.emit(escrow, "AutoReleased").withArgs(1)
      .to.emit(escrow, "FundsReleased").withArgs(1, farmer.address, amount);

    const escrowData = await escrow.escrows(1);
    expect(escrowData.state).to.equal(1); // COMPLETED

    const farmerBalance = await usdt.balanceOf(farmer.address);
    expect(farmerBalance).to.equal(amount);
  });

  it("Should allow a buyer or farmer to raise a dispute", async function () {
    const { escrow, usdt, buyer, farmer } = await deployContracts();
    const amount = 100;
    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);
    await escrow.connect(buyer).createEscrow(farmer.address, 1, amount);

    await expect(escrow.connect(buyer).raiseDispute(1))
      .to.emit(escrow, "DisputeRaised").withArgs(1);

    const escrowData = await escrow.escrows(1);
    expect(escrowData.state).to.equal(2); // DISPUTED
  });

  it("Should allow the arbitrator to resolve a dispute", async function () {
    const { escrow, usdt, arbitrator, buyer, farmer } = await deployContracts();
    const amount = 100;
    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);
    await escrow.connect(buyer).createEscrow(farmer.address, 1, amount);
    await escrow.connect(buyer).raiseDispute(1);

    // Favor buyer
    await expect(escrow.connect(arbitrator).resolveDispute(1, true))
      .to.emit(escrow, "DisputeResolved").withArgs(1, buyer.address);
    
    const escrowData = await escrow.escrows(1);
    expect(escrowData.state).to.equal(3); // REFUNDED

    const buyerBalance = await usdt.balanceOf(buyer.address);
    expect(buyerBalance).to.equal(1000);

    // Favor farmer
    await usdt.connect(buyer).approve(await escrow.getAddress(), amount);
    await escrow.connect(buyer).createEscrow(farmer.address, 2, amount);
    await escrow.connect(buyer).raiseDispute(2);

    await expect(escrow.connect(arbitrator).resolveDispute(2, false))
      .to.emit(escrow, "DisputeResolved").withArgs(2, farmer.address)
      .to.emit(escrow, "FundsReleased").withArgs(2, farmer.address, amount);

    const escrowData2 = await escrow.escrows(2);
    expect(escrowData2.state).to.equal(1); // COMPLETED

    const farmerBalance = await usdt.balanceOf(farmer.address);
    expect(farmerBalance).to.equal(amount);
  });
});