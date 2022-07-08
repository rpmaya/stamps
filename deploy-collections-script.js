const { ethers } = require("hardhat");

async function main() {


    const [deployer] = await ethers.getSigners();
    //console.log("Deploying contracts with the account:", deployer.address);
    //let txHash, txReceipt;
    const Collection = await ethers.getContractFactory("StampCollection");

     /* Deploy Collections 721 Contract  */
     const collection = await Collection.deploy();
     await collection.deployed()
     txHash = collection.deployTransaction.hash;
     txReceipt = await ethers.provider.waitForTransaction(txHash);
     let collectionContractAddress = txReceipt.contractAddress;
     console.log("Soga Collection deployed to:", collectionContractAddress);
    

     const collectionAddress = collectionContractAddress;
     //const collectionAddress = '0x77dFFFBE961D8bD7e50Ba33C0f474A24D1Ca8e93';
     const contractCollection = Collection.attach(collectionAddress);

     /* Mint licenses  */
     const CID = "QmeTg3YCRUBBeJqJKSjyqAcsEYDhQ4SuRaFxa3n7h7Qgt4";
     const maxNFT = 16;

     for (let i = 1; i <= maxNFT; i++) {
        uri = CID + "/" + i + ".json";
        const txm = await contractCollection.safeMint(deployer.address, uri);
        await txm.wait();
        console.log("Collection", uri, "minted");
     }
    
     /* Testing
     const id = 0;
     let url = await contractCollection.tokenURI(id);
     console.log("URL 0:", url);

     const new_url = "QmdGSJC8xK32YE5V3ie78Pkbpk5eu29JqEyZCgV8gPaSEF/0000000000000000000000000000000000000000000000000000000000000001.json"
     const txsu = await contractCollection.setTokenURI(0, new_url);
     await txsu.wait();

     url = await contractCollection.tokenURI(id);
     console.log("New URL 0:", url);
      */
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
