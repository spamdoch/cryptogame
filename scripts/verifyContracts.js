require('@nomiclabs/hardhat-etherscan')
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

  
   await hre.run("verify:verify", {
    address: '0x8780b96483676aa8E941f4aacF9d9a3b7629545e',
    constructorArguments: [BASE_URI, root, proxyRegistryAddressPolygon],
  });
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
