// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "./lib/Events.sol";
import "./lib/Errors.sol";

contract FarmerRegistry {
    struct Farmer {
        string name;
        string location;
        string metadataURI;
        bool isRegistered;
    }

    struct Listing {
        uint256 id;
        string crop;
        uint256 quantity;
        uint256 price; 
        bool active;
    }

    mapping(address => Farmer) public farmers;
    mapping(address => Listing[]) public listings;
    uint256 private listingIdCounter;

    modifier onlyRegistered() {
        require(farmers[msg.sender].isRegistered, "Not registered");
        _;
    }

    function registerFarmer(string memory _name, string memory _location, string memory _metadataURI) external {
        if(
            farmers[msg.sender].isRegistered
        ) {
            revert Errors.UserAlreadyRegistered();
        }
        farmers[msg.sender] = Farmer(_name, _location, _metadataURI, true);
        emit Events.FarmerRegistered(msg.sender, _name, _location);
    }

    function addListing(string memory _crop, uint256 _quantity, uint256 _price) external onlyRegistered {
        listingIdCounter++;
        listings[msg.sender].push(Listing(listingIdCounter, _crop, _quantity, _price, true));
        emit Events.ListingAdded(msg.sender, listingIdCounter, _crop, _quantity, _price);
    }

    function updateListingStatus(uint256 _listingId, bool _active) external onlyRegistered {
        Listing[] storage farmerListings = listings[msg.sender];
        for (uint256 i = 0; i < farmerListings.length; i++) {
            if (farmerListings[i].id == _listingId) {
                farmerListings[i].active = _active;
                emit Events.ListingUpdated(msg.sender, _listingId, _active);
                return;
            }
        }
        revert Errors.ListingNotFound();
    }

    function getFarmerListings(address _farmer) external view returns (Listing[] memory) {
        return listings[_farmer];
    }
}