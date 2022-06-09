
const RPC_URL =process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;

const config = {
    title: 'Space Taxi DAPP',
    description: 'A NFT minting DAPP for the cryptospacetaxi.com Game',
    contractAddress: '0x8780b96483676aa8E941f4aacF9d9a3b7629545e',
    maxMintAmount: 50,
    presaleMaxMintAmount: 50,
    price: 170,
  }

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 137,
  walletSelect: {
    wallets: [
  { walletName: "metamask", preferred: true },
  { walletName: "walletLink", preferred: true, rpcUrl: RPC_URL, appName: 'Space Taxi Dapp' },
  { walletName: "coinbase", preferred: true },
  { walletName: "trust", preferred: true, rpcUrl: RPC_URL },
  { walletName: "gnosis", preferred: true},
  { walletName: "authereum" },
  {
    walletName: 'ledger',
    rpcUrl: RPC_URL
  },
  {
    walletName: 'lattice',
    rpcUrl: RPC_URL,
    appName: 'SpaceTaxi DAPP'
  },
  {
    walletName: 'keepkey',
    rpcUrl: RPC_URL
  },
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' },
  ]
}

  export { config, onboardOptions }
