// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

    /* Deploy Contract for Stamps*/
    const Stamps = await ethers.getContractFactory("Stamps");

    /* Deploy Contract for NFT 1155  */
    const stamps = await upgrades.deployProxy(Stamps);
    await stamps.deployed();
    txHash = stamps.deployTransaction.hash;
    txReceipt = await ethers.provider.waitForTransaction(txHash);
    const stampsAddress = txReceipt.contractAddress;
    console.log("Stamps deployed to:", stampsAddress);
 

   /* Get real address behind proxy */
   const CONTRACT_ADDRESS = stampsAddress;
   const myAddress = await upgrades.erc1967.getImplementationAddress(CONTRACT_ADDRESS);
   console.log("Soga real Address:", myAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
