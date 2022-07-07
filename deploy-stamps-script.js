const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;
  const Stamps = await ethers.getContractFactory("Stamps");

  /* Deploy Contract for Stamps ERC-1155 */
  const stamps = await upgrades.deployProxy(Stamps);
  await stamps.deployed();
  txHash = stamps.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  const stampsAddress = txReceipt.contractAddress;
  console.log("Stamps deployed to:", stampsAddress);

  WALLET_OWNER_ADDRESS = deployer.address;
  const CONTRACT_ADDRESS = stampsAddress;

  /* Get real address behind proxy */
  const myAddress = await upgrades.erc1967.getImplementationAddress(CONTRACT_ADDRESS);
  console.log("Soga real Address:", myAddress);

  const contractNFT = Stamps.attach(CONTRACT_ADDRESS);

  let NFT_IDs = [];
  let NFT_Amounts = [];
  for (let i = 1; i <= 144; i++) {
    NFT_IDs.push(i);
    NFT_Amounts.push(1);
  }

  const tx = await contractNFT.mintBatch(WALLET_OWNER_ADDRESS, NFT_IDs, NFT_Amounts, "0x");
  console.log("NFTs are minting");
  await tx.wait();
  console.log("NFTs are minted");
  
  /*
  const tx = await contractNFT.setURI("https://gateway.pinata.cloud/ipfs/QmZUuQ1oabmCY4w1o4iiViKfgrvHptUsheftLWbnmYc4C4/{id}.json");
  await tx.wait();
  */
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
