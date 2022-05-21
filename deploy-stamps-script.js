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

    const Stamps = await ethers.getContractFactory("Stamps");
    /* Deploy Contract for Stamps ERC-1155
    const stamps = await upgrades.deployProxy(Stamps);
    await stamps.deployed();
    txHash = stamps.deployTransaction.hash;
    txReceipt = await ethers.provider.waitForTransaction(txHash);
    const stampsAddress = txReceipt.contractAddress;
    console.log("Stamps deployed to:", stampsAddress);
    */
    WALLET_OWNER_ADDRESS = "0xfd45Bc1b6b4F2B04fa4228B8d99183D1144Ade9f";
    const CONTRACT_ADDRESS = "0x77053f198Ca4b00f7eE5C25c44F2EDc420b49bDb";
   /* Get real address behind proxy 
   const myAddress = await upgrades.erc1967.getImplementationAddress(CONTRACT_ADDRESS);
   console.log("Soga real Address:", myAddress);
   */

   const contractNFT = Stamps.attach(CONTRACT_ADDRESS);
  
 
   let NFT_IDs = [];
   let NFT_Amounts = []; 
   for (let i=1; i<=144; i++) {
       NFT_IDs.push(i);
       NFT_Amounts.push(1);
    }
 
   const tx = await contractNFT.mintBatch(WALLET_OWNER_ADDRESS, NFT_IDs, NFT_Amounts, "0x");
   console.log("NFTs are minting");
   await tx.wait();
   console.log("NFTs are minted");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
