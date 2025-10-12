// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./lib/Errors.sol";
import "./lib/Events.sol";

contract CropTrustEscrow is ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum EscrowState {
        ACTIVE,
        COMPLETED,
        DISPUTED,
        REFUNDED
    }

    struct Escrow {
        uint256 escrowId;
        address buyer;
        address farmer;
        uint256 listingId;
        uint256 amount;
        address paymentToken;
        EscrowState state;
        uint256 createdAt;
        uint256 autoReleaseTime;
    }

    uint256 public escrowCounter;
    uint256 public autoReleaseDelay = 48 hours;
    address public arbitrator;
    address public immutable USDT_TOKEN;

    mapping(uint256 => Escrow) public escrows;

    modifier onlyArbitrator() {
        require(msg.sender == arbitrator, "Only arbitrator");
        _;
    }

    constructor(address _arbitrator, address _usdt) {
        if(_usdt == address(0)){
            revert Errors.InvalidUSDTAddress();
        }
        arbitrator = _arbitrator;
        USDT_TOKEN = _usdt;
    }

    /// @notice Buyer initiates escrow (called via Marketplace)
    function createEscrow(
        address _farmer,
        uint256 _listingId,
        uint256 _amount
    ) external nonReentrant returns (uint256) {
        if (_farmer == address(0)) {
            revert Errors.InvalidFarmer();
        }
        if (_amount == 0) {
            revert Errors.InvalidAmount();
        }
        if (msg.sender == _farmer) {
            revert Errors.CannotBuyFromSelf();
        }

        IERC20 usdt = IERC20(USDT_TOKEN);
        usdt.safeTransferFrom(msg.sender, address(this), _amount);

        escrowCounter++;
        escrows[escrowCounter] = Escrow({
            escrowId: escrowCounter,
            buyer: msg.sender,
            farmer: _farmer,
            listingId: _listingId,
            amount: _amount,
            paymentToken: USDT_TOKEN,
            state: EscrowState.ACTIVE,
            createdAt: block.timestamp,
            autoReleaseTime: block.timestamp + autoReleaseDelay
        });

        emit Events.EscrowCreated(escrowCounter, msg.sender, _farmer, _amount, _listingId);
        return escrowCounter;
    }

    /// @notice Buyer confirms delivery → funds released to farmer
    function confirmDelivery(uint256 _escrowId) external nonReentrant {
        Escrow storage e = escrows[_escrowId];
        if(msg.sender != e.buyer){
            revert Errors.OnlyBuyerCanConfirm();
        }
        if(e.state != EscrowState.ACTIVE){
            revert Errors.EscrowNotActive();
        }

        e.state = EscrowState.COMPLETED;
        IERC20(e.paymentToken).safeTransfer(e.farmer, e.amount);

        emit Events.DeliveryConfirmed(_escrowId);
        emit Events.FundsReleased(_escrowId, e.farmer, e.amount);
    }

    /// @notice Auto-release after 48hrs (failsafe)
    function autoRelease(uint256 _escrowId) external nonReentrant {
        Escrow storage e = escrows[_escrowId];
        if(e.state != EscrowState.ACTIVE){
            revert Errors.EscrowNotActive();
        }
        if(block.timestamp <= e.autoReleaseTime){
            revert Errors.AutoReleaseTimeNotReached();
        }

        e.state = EscrowState.COMPLETED;
        IERC20(e.paymentToken).safeTransfer(e.farmer, e.amount);

        emit Events.AutoReleased(_escrowId);
        emit Events.FundsReleased(_escrowId, e.farmer, e.amount);
    }

    /// @notice Buyer or farmer raises dispute
    function raiseDispute(uint256 _escrowId) external nonReentrant {
        Escrow storage e = escrows[_escrowId];
        if(msg.sender != e.buyer && msg.sender != e.farmer) {
            revert Errors.NotAuthorized();
        }
        if(e.state != EscrowState.ACTIVE){
            revert Errors.EscrowNotActive();
        }

        e.state = EscrowState.DISPUTED;
        emit Events.DisputeRaised(_escrowId);
    }

    /// @notice Arbitrator resolves dispute (manual resolution)
    function resolveDispute(uint256 _escrowId, bool favorBuyer) external nonReentrant onlyArbitrator {
        Escrow storage e = escrows[_escrowId];
        if(e.state != EscrowState.DISPUTED){
            revert Errors.EscrowNotDisputed();
        }

        if (favorBuyer) {
            e.state = EscrowState.REFUNDED;
            IERC20(e.paymentToken).safeTransfer(e.buyer, e.amount);
            emit Events.DisputeResolved(_escrowId, e.buyer);
        } else {
            e.state = EscrowState.COMPLETED;
            IERC20(e.paymentToken).safeTransfer(e.farmer, e.amount);
            emit Events.DisputeResolved(_escrowId, e.farmer);
            emit Events.FundsReleased(_escrowId, e.farmer, e.amount);
        }
    }

    function getEscrow(uint256 _escrowId) external view returns (Escrow memory) {
        return escrows[_escrowId];
    }

    function canAutoRelease(uint256 _escrowId) external view returns (bool) {
        Escrow storage e = escrows[_escrowId];
        return e.state == EscrowState.ACTIVE && block.timestamp >= e.autoReleaseTime;
    }
}