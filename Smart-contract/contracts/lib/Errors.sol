// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

library Errors {
    error ListingNotFound();
    error UserAlreadyRegistered();
    error InvalidUSDTAddress();
    error InvalidFarmer();
    error CannotBuyFromSelf();
    error OnlyBuyerCanConfirm();
    error EscrowNotActive();
    error AutoReleaseTimeNotReached();
    error NotAuthorized();
    error EscrowNotDisputed();
    error InsufficientAllowanceToTransferCropTopTokens();
    error InvalidSender(address sender);
    error InvalidReceiver(address receiver);
    error InsufficientBalance(address sender, uint256 balance, uint256 amount);
    error InsufficientAllowance(address spender, uint256 allowance, uint256 amount);
    error InvalidApprover(address owner);
    error InvalidSpender(address spender);
    error TotalSupplyMustBeGreaterThanZero();
    error InvalidAmount();
}
