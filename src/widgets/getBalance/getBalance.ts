import { Provider, Wallet } from "fuels";

const network = "https://devnet.fuel.network/v1/graphql";
const address =
  "fuel1359f0q9rgkyh8dzzxwnhr8axehfc3556z4kul98ks3sa2zjvlaqsrz3asq";

const provider = await Provider.create(network);
const wallet = Wallet.fromAddress(address, provider);
const balances = await wallet.getBalances();

console.log(balances.map((b) => b.amount.toNumber()));
