import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia, defineChain } from "thirdweb/chains";

const clientId = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_ID!;
const secretKey = process.env.EXPO_PUBLIC_THIRDWEB_CLIENT_SECRET!;

if (!clientId) {
  throw new Error(
    "Missing EXPO_PUBLIC_THIRDWEB_CLIENT_ID - make sure to set it in your .env file"
  );
}

export const client = createThirdwebClient({
  clientId,
  secretKey,
});

export const chain = baseSepolia;

export const contract = getContract({
  client,
  address: "0x733C745DE9e7E6292A2f2C8C1e7Fe7Bb4F693e08",
  chain: defineChain(11155111),
});
