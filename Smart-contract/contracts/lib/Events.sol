// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

library Events {
    event FarmerRegistered(
        address indexed farmer, 
        string name, 
        string location
    );
    event ListingAdded(
        address indexed farmer, 
        uint256 listingId, 
        string crop, 
        uint256 quantity, 
        uint256 price
    );
    event ListingUpdated(
        address indexed farmer, 
        uint256 listingId, 
        bool active
    );
    event PurchaseInitiated(
        address indexed buyer, 
        address indexed farmer,
        uint256 listingId, 
        uint256 amount
    );

    event EscrowCreated(
        uint256 indexed escrowId, 
        address indexed buyer, 
        address indexed farmer, 
        uint256 amount, 
        uint256 listingId
    );
    event FundsReleased(
        uint256 indexed escrowId, 
        address indexed farmer, 
        uint256 amount
    );
    event DeliveryConfirmed(uint256 indexed escrowId);
    event AutoReleased(uint256 indexed escrowId);
    event DisputeRaised(uint256 indexed escrowId);
    event DisputeResolved(uint256 indexed escrowId, address winner);
}
