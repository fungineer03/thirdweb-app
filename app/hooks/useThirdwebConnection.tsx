import { useState } from "react";
import { useConnect, useDisconnect, useActiveAccount } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";

const useThirdwebConnection = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const account = useActiveAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWithMetaMask = async () => {
    try {
      setIsConnecting(true);
      const wallet = createWallet("io.metamask");
      await connect(() => wallet);
    } catch (error) {
      console.error("Error connecting with MetaMask:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  return {
    account,
    isConnecting,
    connectWithMetaMask,
    disconnect,
  };
};

export default useThirdwebConnection;
