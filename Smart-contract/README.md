# CropTrust Smart Contracts

This directory contains the Solidity smart contracts that power the CropTrust marketplace.

## Contracts

- **`FarmerRegistry.sol`**: Manages farmer profiles and crop listings.
- **`CropTrustMarketplace.sol`**: The central marketplace where buyers can purchase crops.
- **`CropTrustEscrow.sol`**: A secure escrow contract for holding and releasing payments.

For a more detailed explanation of the smart contract architecture, please see the main [README.md](/README.md) file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1.  Navigate to the `Smart-contract` directory:
    ```bash
    cd Smart-contract
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Compiling

To compile the smart contracts, run:

```bash
npx hardhat compile
```

### Testing

To run the tests, run:

```bash
npx hardhat test
```

### Deployment

To deploy the smart contracts to a network, you will need to configure your `hardhat.config.ts` file with the desired network and a private key.

Once configured, you can run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network your-network
```