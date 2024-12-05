import React from "react";
import { View } from "react-native";
import MetaMaskConnectButton from "./components/MetaMaskConnectButton";
import ClockInOut from "./pages/ClockInOut";
import { useActiveAccount, useActiveWallet } from "thirdweb/react";

const HomeScreen = () => {
  const account = useActiveAccount();
  const wallet = useActiveWallet();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MetaMaskConnectButton />
      {wallet && account && <ClockInOut />}
    </View>
  );
};

export default HomeScreen;
