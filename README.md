# 🌱 CropTrust: A Decentralized Marketplace for Agriculture

CropTrust is a decentralized, blockchain-based marketplace designed to connect farmers directly with buyers, fostering transparency, security, and fairness in the agricultural supply chain. By removing intermediaries, the platform empowers farmers to receive fair prices for their produce while providing buyers with transparent and secure transactions.

## Core Components

The CropTrust ecosystem is built upon a suite of smart contracts that work in concert to create a seamless and trustless environment.

### 1. Farmer Registry (`FarmerRegistry.sol`)

This contract serves as the digital identity hub for farmers. Key functions include:
- **Profile Registration**: Farmers can register their profiles with essential information such as name, location, and other relevant metadata.
- **Crop Listings**: Once registered, farmers can create listings for the crops they wish to sell, specifying details like crop type, quantity, and price.

### 2. Marketplace (`CropTrustMarketplace.sol`)

This contract functions as the central platform where buyers can discover and purchase crop listings from registered farmers. When a buyer initiates a purchase, the marketplace triggers the creation of a secure escrow to protect both parties, rather than sending the payment directly to the farmer.

### 3. Escrow (`CropTrustEscrow.sol`)

The escrow contract is the financial heart of the system, managing payments in a trustless manner.

- **Secure Fund Holding**: When a buyer commits to a purchase, their payment is held in the escrow contract.
- **Payment Method**: The system uses **USDT (Tether)**, a stablecoin pegged to the US Dollar, for all transactions.
- **Confirmation and Release**: Funds are released to the farmer only after the buyer confirms receipt of the goods.
- **Dispute Resolution**: In the event of a dispute, a designated arbitrator can intervene to resolve the conflict by either refunding the buyer or releasing the funds to the farmer.
- **Failsafe Mechanism**: To protect farmers, an auto-release mechanism is implemented. If the buyer does not take any action within a predefined time (e.g., 48 hours), the funds are automatically released to the farmer.

## How It Works

1.  **Listing**: A registered farmer lists their crops for sale on the marketplace.
2.  **Purchase**: A buyer finds the listing and initiates a purchase, depositing USDT into the secure escrow contract.
3.  **Delivery**: The farmer delivers the crops to the buyer.
4.  **Confirmation**: The buyer confirms receipt of the goods.
5.  **Payment Release**: The escrow contract releases the funds to the farmer.

In summary, the CropTrust smart contracts work together to create a more equitable and efficient agricultural market by removing intermediaries, reducing risk, and fostering direct, transparent relationships between farmers and buyers.

## Technology Stack

*   **Frontend**: React, Next.js, TailwindCSS
*   **Smart Contracts**: Solidity
*   **Blockchain**: Deployed on Celo, Polygon, or Base
*   **Storage**: IPFS (for crop images and documentation)
*   **Payments**: USDT (Tether)

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/croptrust.git
cd croptrust

# Install dependencies for the front-end
cd front-end
npm install

# Run the front-end development server
npm run dev

# Install dependencies for the smart contracts
cd ../Smart-contract
npm install

# Deploy the smart contracts (example with Hardhat)
npx hardhat run scripts/deploy.js --network your-network
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.