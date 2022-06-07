const { ethers } = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    let txHash, txReceipt;
    const Collection = await ethers.getContractFactory("StampCollection");

     /* Deploy Collections 721 Contract */
     const collection = await Collection.deploy(nftContractAddress, sogaContractAddress);
     await collection.deployed()
     txHash = collection.deployTransaction.hash;
     txReceipt = await ethers.provider.waitForTransaction(txHash);
     let collectionContractAddress = txReceipt.contractAddress;
     console.log("Soga Licenses deployed to:", collectionContractAddress);
 
     const collectionAddress = collectionContractAddress;
 
     /* Mint licenses */
     const contractCollection = Collection.attach(collectionAddress);
     const uri = "/";
     const maxNFT = 5;
     for (let i = 0; i < maxNFT; i++) {
        const txm = await contractCollection.safeMint(deployer.address, uri);
        await txm.wait();
        console.log("Collection", i, "minted");
     }

     /* Testing */
     const id = 1;
     const url = await contractCollection.tokenURI(id);
     console.log("URL 1:", url);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
