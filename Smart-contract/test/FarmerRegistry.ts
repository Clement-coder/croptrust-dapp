import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("FarmerRegistry", function () {
  async function deployFarmerRegistry() {
    const FarmerRegistry = await ethers.getContractFactory("FarmerRegistry");
    const farmerRegistry = await FarmerRegistry.deploy();
    return { farmerRegistry };
  }

  it("Should register a new farmer", async function () {
    const { farmerRegistry } = await deployFarmerRegistry();
    const [owner, farmer1] = await ethers.getSigners();

    const name = "John Doe";
    const location = "Nigeria";
    const metadataURI = "ipfs://somehash";

    await expect(farmerRegistry.connect(farmer1).registerFarmer(name, location, metadataURI))
      .to.emit(farmerRegistry, "FarmerRegistered")
      .withArgs(farmer1.address, name, location);

    const farmer = await farmerRegistry.farmers(farmer1.address);
    expect(farmer.name).to.equal(name);
    expect(farmer.location).to.equal(location);
    expect(farmer.metadataURI).to.equal(metadataURI);
    expect(farmer.isRegistered).to.be.true;
  });

  it("Should add a new listing for a registered farmer", async function () {
    const { farmerRegistry } = await deployFarmerRegistry();
    const [owner, farmer1] = await ethers.getSigners();

    await farmerRegistry.connect(farmer1).registerFarmer("John Doe", "Nigeria", "ipfs://somehash");

    const crop = "Cassava";
    const quantity = 100;
    const price = 50;

    await expect(farmerRegistry.connect(farmer1).addListing(crop, quantity, price))
      .to.emit(farmerRegistry, "ListingAdded")
      .withArgs(farmer1.address, 1, crop, quantity, price);

    const listings = await farmerRegistry.getFarmerListings(farmer1.address);
    expect(listings.length).to.equal(1);
    expect(listings[0].crop).to.equal(crop);
    expect(listings[0].quantity).to.equal(quantity);
    expect(listings[0].price).to.equal(price);
    expect(listings[0].active).to.be.true;
  });

  it("Should update a listing's status", async function () {
    const { farmerRegistry } = await deployFarmerRegistry();
    const [owner, farmer1] = await ethers.getSigners();

    await farmerRegistry.connect(farmer1).registerFarmer("John Doe", "Nigeria", "ipfs://somehash");
    await farmerRegistry.connect(farmer1).addListing("Cassava", 100, 50);

    await expect(farmerRegistry.connect(farmer1).updateListingStatus(1, false))
      .to.emit(farmerRegistry, "ListingUpdated")
      .withArgs(farmer1.address, 1, false);

    const listings = await farmerRegistry.getFarmerListings(farmer1.address);
    expect(listings[0].active).to.be.false;
  });

  it("Should return all listings for a farmer", async function () {
    const { farmerRegistry } = await deployFarmerRegistry();
    const [owner, farmer1] = await ethers.getSigners();

    await farmerRegistry.connect(farmer1).registerFarmer("John Doe", "Nigeria", "ipfs://somehash");
    await farmerRegistry.connect(farmer1).addListing("Cassava", 100, 50);
    await farmerRegistry.connect(farmer1).addListing("Yam", 200, 75);

    const listings = await farmerRegistry.getFarmerListings(farmer1.address);
    expect(listings.length).to.equal(2);
  });
});