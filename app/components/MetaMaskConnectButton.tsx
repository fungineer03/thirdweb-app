import React from "react";
import { Text, View } from "react-native";
import useThirdwebConnection from "../hooks/useThirdwebConnection";
import { ConnectButton, useActiveWallet, useDisconnect } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { shortenAddress } from "thirdweb/utils";
import { ThemedButton } from "@/components/ThemedButton";
import { client } from "@/constants/thirdweb";

const wallets = [createWallet("io.metamask")];

const ConnectWithMetaMask = () => {
  return (
    <>
      <Text style={{ color: "white", marginBottom: 25, fontSize: 20 }}>
        Please sign in with a Wallet to Record Attendance
      </Text>
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
        showAllWallets={false}
      />
    </>
  );
};

const MetaMaskConnectButton = () => {
  const { disconnect } = useDisconnect();
  const wallet = useActiveWallet();

  const { account } = useThirdwebConnection();

  if (account) {
    return (
      <View style={{ display: "flex", flex: 0.15, padding: 100 }}>
        <Text style={{ color: "white" }}>
          Connected to Address: {shortenAddress(account.address)}
        </Text>
        <View style={{ height: 16 }} />
        <ThemedButton onPress={() => disconnect(wallet)} title="Disconnect" />
      </View>
    );
  }

  return <ConnectWithMetaMask />;
};

export default MetaMaskConnectButton;
