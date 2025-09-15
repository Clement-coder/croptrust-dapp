// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract CropTrustMarketplace {
    uint256 private cropIdCounter;

    struct Crop {
        uint256 id;
        string name;
        uint256 quantity;
        uint256 price;
        string location;
        string ipfsHash;
        address farmer;
        bool isActive;
    }

    mapping(uint256 => Crop) public crops;

    event CropListed(
        uint256 indexed id,
        string name,
        uint256 quantity,
        uint256 price,
        string location,
        string ipfsHash,
        address indexed farmer
    );

    event CropUpdated(
        uint256 indexed id,
        uint256 newQuantity,
        uint256 newPrice,
        string newIpfsHash
    );

    function listCrop(
        string memory _name,
        uint256 _quantity,
        uint256 _price,
        string memory _location,
        string memory _ipfsHash
    ) external {
        require(_quantity > 0, "Quantity must be > 0");
        require(_price > 0, "Price must be > 0");

        uint256 newCropId = cropIdCounter;

        crops[newCropId] = Crop({
            id: newCropId,
            name: _name,
            quantity: _quantity,
            price: _price,
            location: _location,
            ipfsHash: _ipfsHash,
            farmer: msg.sender,
            isActive: true
        });

        emit CropListed(
            newCropId,
            _name,
            _quantity,
            _price,
            _location,
            _ipfsHash,
            msg.sender
        );

        cropIdCounter++;
    }

    function updateCrop(
        uint256 _id,
        uint256 _newQuantity,
        uint256 _newPrice,
        string memory _newIpfsHash
    ) external {
        Crop storage crop = crops[_id];
        require(crop.farmer == msg.sender, "Not your crop");
        require(crop.isActive, "Crop not active");

        crop.quantity = _newQuantity;
        crop.price = _newPrice;
        crop.ipfsHash = _newIpfsHash;

        emit CropUpdated(_id, _newQuantity, _newPrice, _newIpfsHash);
    }

    function getAllCrops() external view returns (Crop[] memory) {
        uint256 total = cropIdCounter;
        uint256 activeCount;

        for (uint256 i = 0; i < total; i++) {
            if (crops[i].isActive) {
                activeCount++;
            }
        }

        Crop[] memory activeCrops = new Crop[](activeCount);
        uint256 index = 0;

        for (uint256 i = 0; i < total; i++) {
            if (crops[i].isActive) {
                activeCrops[index] = crops[i];
                index++;
            }
        }

        return activeCrops;
    }
}
