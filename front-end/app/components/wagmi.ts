import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

const projectId = "c15793b69ed23705b84e96fb6e29aaa2"; // replace with your WalletConnect projectId

const { connectors } = getDefaultWallets({
  appName: "CropTrust",
  projectId,
});

export const config = createConfig({
  chains: [sepolia],
  connectors,
  transports: {
    [sepolia.id]: http(),
  },
});
