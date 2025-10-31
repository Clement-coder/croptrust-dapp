# 🌱 CropTrust: A Decentralized Marketplace for Agriculture

**CropTrust** is a decentralized, blockchain-based marketplace built on **Hedera** that connects farmers directly with buyers, fostering transparency, security, and fairness in the agricultural supply chain.
By removing intermediaries, CropTrust empowers farmers to earn fair prices for their produce while providing buyers with trusted, verifiable transactions.

---

## 🌾 Core Components

The CropTrust ecosystem is powered by a suite of smart contracts that ensure a seamless, trustless, and transparent experience.

### 1. Farmer Registry (`FarmerRegistry.sol`)

This contract acts as the **digital identity hub** for farmers.

**Key functions:**

* **Profile Registration:** Farmers register with essential information such as name, location, and farm details.
* **Crop Listings:** Registered farmers can create listings for crops they wish to sell, including crop type, quantity, and price.

---

### 2. Marketplace (`CropTrustMarketplace.sol`)

The marketplace serves as the **core trading platform** where buyers can discover and purchase crop listings from registered farmers.

When a buyer initiates a purchase, the marketplace creates a **secure escrow** to hold funds until delivery is confirmed.

---

### 3. Escrow (`CropTrustEscrow.sol`)

The escrow contract is the **financial backbone** of the system, ensuring that payments are handled securely and transparently.

**Features:**

* **Secure Fund Holding:** Buyer payments are held safely in escrow.
* **Stable Payments:** Transactions use **USDT (Tether)** for stability.
* **Confirmation & Release:** Funds are released to the farmer only when the buyer confirms receipt.
* **Dispute Resolution:** A designated arbitrator can resolve disputes by refunding the buyer or releasing funds to the farmer.
* **Failsafe Mechanism:** If no action is taken within a predefined time (e.g., 48 hours), funds are automatically released to the farmer.

---

## 🧭 How It Works

1. **Registration:** A user signs up and gains access to their dashboard.
2. **Role Selection:** From the dashboard, the user can toggle between being a **Farmer** or a **Buyer**.
3. **Listing (Farmer Mode):** Farmers can list crops for sale with price, quantity, and description.
4. **Purchase (Buyer Mode):** Buyers browse available crops and initiate purchases, depositing USDT into escrow.
5. **Delivery & Confirmation:** Farmers deliver the goods; buyers confirm receipt.
6. **Payment Release:** Escrow releases funds to the farmer.

This structure allows flexibility—users can participate in both roles depending on their needs.

---

## ⚙️ Technology Stack

* **Frontend:** React, Next.js, TailwindCSS
* **Smart Contracts:** Solidity
* **Blockchain:** Hedera Hashgraph
* **Storage:** IPFS (for crop images and documentation)
* **Payments:** USDT (Tether, via Hedera Token Service)

---

## 🚀 Installation and Setup

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
npx hardhat run scripts/deploy.js --network hedera-testnet
```

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for details.
