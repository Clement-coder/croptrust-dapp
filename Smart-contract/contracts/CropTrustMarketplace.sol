// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./FarmerRegistry.sol";
import "./CropTrustEscrow.sol";
import "./lib/Events.sol";

contract CropTrustMarketplace {
    FarmerRegistry public farmerRegistry;
    CropTrustEscrow public escrow;

    

    constructor(address _farmerRegistry, address _escrow) {
        farmerRegistry = FarmerRegistry(_farmerRegistry);
        escrow = CropTrustEscrow(_escrow);
    }

    function buyCrop(address _farmer, uint256 _listingId, uint256 _amount) external {
        FarmerRegistry.Listing[] memory farmerListings = farmerRegistry.getFarmerListings(_farmer);
        FarmerRegistry.Listing memory selected;

        bool found;
        for (uint256 i = 0; i < farmerListings.length; i++) {
            if (farmerListings[i].id == _listingId && farmerListings[i].active) {
                selected = farmerListings[i];
                found = true;
                break;
            }
        }
        require(found, "Listing not found or inactive");
        require(_amount == selected.price, "Incorrect payment");

        escrow.createEscrow(_farmer, _listingId, _amount);
        emit Events.PurchaseInitiated(msg.sender, _farmer, _listingId, _amount);
    }
}
