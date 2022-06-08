const hre = require("hardhat");
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const whitelist = require('./whitelist.js');

const BASE_URI = 'ipfs://QmTckLDV3SsBWdw8o6ndjmgHyNfHNtxqev1CfRTb79GJz3/';
const proxyRegistryAddressPolygon = "0x33a02E6cC863D393d6Bf231B697b82F6e499cA71";

async function main() {
   // Calculate merkle root from the whitelist array
   const leafNodes = whitelist.map((addr) => keccak256(addr));
   const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
   const root = merkleTree.getRoot();

   // Deploy the contract
  const SpaceTaxis = await hre.ethers.getContractFactory('SpaceTaxi')
  const spaceTaxis = await SpaceTaxis.deploy(
    BASE_URI,
    root,
    proxyRegistryAddressPolygon
  )

  await spaceTaxis.deployed()

  console.log('SpaceTaxis deployed to:', spaceTaxis.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
