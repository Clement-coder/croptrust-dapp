
---

# 🌱 CropTrust – Web3-Powered Marketplace for Fair Farming

## 🛑 Problem

Farmers in rural Africa often face **unfair pricing** due to middlemen who control the supply chain.

* Farmers sell crops at **extremely low prices**.
* Buyers in cities pay **much higher amounts**.
* Farmers remain poor, while food insecurity increases.

---

## 💡 Solution – CropTrust

**CropTrust** is a **Web3-powered agricultural marketplace** that connects farmers directly to buyers (restaurants, traders, households).

Using **blockchain, smart contracts, and stablecoins**, we ensure:
✅ Fair pricing for farmers
✅ Transparency for buyers
✅ Trustless escrow payments without middlemen

---

## ⚙️ Key Features

* 👨‍🌾 **Farmer Listings** – Farmers post crops (name, quantity, price, location, photos).
* 🛒 **Marketplace** – Buyers browse listings with transparent on-chain pricing.
* 💳 **Stablecoin Payments** – USDT/USDC/CELO ensure inflation-proof payments.
* 🔒 **Escrow System** – Smart contract locks funds until delivery is confirmed.
* ⭐ **Reputation System** – Ratings and reviews build trust between farmers and buyers.

---

## 🛠 Workflow

### 1. Farmer Flow

* Farmer signs up with wallet (MetaMask, Celo, Trust Wallet).
* Farmer lists crops (e.g., *50kg Yams – 80 USDT*).
* Listing stored on **Blockchain + IPFS**.
* Farmer stakes a small deposit to prevent fake listings.
* Waits for buyer.

### 2. Buyer Flow

* Buyer visits marketplace via web app.
* Browses available crops (with details, location, ratings).
* Selects desired produce → clicks **Buy Now**.

### 3. Escrow + Delivery Flow (Core Innovation)

1. **Purchase Initiated** – Buyer pays in stablecoin → Smart contract locks funds in escrow.
2. **Delivery** – Farmer delivers crops OR buyer arranges pickup.
3. **Delivery Confirmation** – Buyer confirms → Funds released to farmer’s wallet.
4. **Auto-Release (Failsafe)** – If buyer forgets, escrow auto-releases after 48hrs.
5. **Disputes (Future Upgrade)** – DAO/arbitrators resolve disputes fairly.

---

## 🚧 Risks, Blockers & Mitigations

| Blocker                    | Risk                   | Fix / Mitigation                                                                |
| -------------------------- | ---------------------- | ------------------------------------------------------------------------------- |
| 💰 Stablecoin Availability | Farmers prefer fiat    | On/off ramps (Celo, Binance P2P, Paystack)                                      |
| 📦 Delivery                | Who ensures delivery?  | Phase 1 = farmer/buyer arrange; Phase 2 = logistics partnerships (GIG, Kobo360) |
| ⏳ Escrow Deadlock          | Buyer fails to confirm | Auto-release after 48hrs + DAO arbitration                                      |
| 🥔 Crop Quality            | Buyer may complain     | Reputation system + photo proof stored on IPFS                                  |
| 🔐 Wallet Complexity       | Farmers may struggle   | Simplified onboarding + farmer education                                        |
| ⚖️ Fake Listings           | Scammers post crops    | Stake deposit + optional KYC for large trades                                   |
| ⚡ Gas Fees                 | Ethereum too expensive | Deploy on **Celo / Polygon / Base** with meta-transactions                      |

---

## 🔑 Why Escrow Matters

* ✅ **Trustless** → No middlemen needed
* ✅ **Protection** → Farmers guaranteed payment, buyers guaranteed delivery
* ✅ **Transparency** → All transactions verifiable on-chain
* ✅ **Automation** → Smart contracts enforce fairness

---

## ⚔️ Competitor Comparison

| Feature             | Gonana (Web2) | Farmcrowdy (Web2)       | **CropTrust (Web3)**       |
| ------------------- | ------------- | ----------------------- | -------------------------- |
| Farmer-to-buyer     | ✅ Yes         | ❌ No (investment model) | ✅ Yes                      |
| Escrow protection   | ❌ No          | ❌ No                    | ✅ Yes                      |
| Stablecoin payments | ❌ No          | ❌ No                    | ✅ Yes                      |
| Transparency        | ❌ Limited     | ❌ Limited               | ✅ On-chain                 |
| Middlemen           | ✅ Yes         | ✅ Yes                   | ❌ None                     |
| Dispute resolution  | Centralized   | Centralized             | DAO / Arbitration          |
| Scalability         | ❌ Limited     | ❌ Limited               | ✅ Borderless (Africa-wide) |

---

## 🏆 Why CropTrust Can Win a Hackathon

🎯 Solves a **real African problem** – middlemen cutting farmer income.
🔗 **Practical Web3 use case** – escrow + stablecoin payments.
🌍 Supports **financial inclusion** – direct, borderless payments.
🗣 Simple pitch:

> “CropTrust helps farmers earn more by selling directly to buyers using blockchain.”

---

## 🚀 Tech Stack

* **Frontend**: React + TailwindCSS
* **Backend**: Node.js / Express
* **Smart Contracts**: Solidity (Deployed on Celo/Polygon/Base)
* **Storage**: IPFS (crop images + proof)
* **Payments**: USDT / USDC / CELO stablecoins
* **Wallets**: MetaMask, Trust Wallet, Celo Extension

---

## 📦 Installation & Setup

```bash
# Clone repo
git clone https://github.com/yourusername/croptrust.git
cd croptrust

# Install dependencies
npm install

# Run frontend
npm run dev

# Deploy contracts (Hardhat/Foundry)
npx hardhat run scripts/deploy.js --network celo
```

---

## 📜 License

MIT License © 2025 CropTrust

---

✨ If you’re hacking with this, remember: **Farmers feed the world, let’s feed the farmers first.** 🌍👨‍🌾

---

