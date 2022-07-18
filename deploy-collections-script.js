const { ethers } = require("hardhat");

async function main() {


    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    let txHash, txReceipt;
    const Collection = await ethers.getContractFactory("CryptoPennyBlack");

     /* Deploy Collections 721 Contract */
     const collection = await Collection.deploy();
     await collection.deployed()
     txHash = collection.deployTransaction.hash;
     txReceipt = await ethers.provider.waitForTransaction(txHash);
     let collectionContractAddress = txReceipt.contractAddress;
     console.log("Crypto Penny Black deployed to:", collectionContractAddress);
   

     //const collectionAddress = collectionContractAddress;
     //const collectionAddress = '0x6E9d756b3e63b149107cC31dd637846Bd21DBc96';
     //const contractCollection = Collection.attach(collectionAddress);

     /* Mint licenses 
     const maxNFT = 18;
     const CID = "QmeTg3YCRUBBeJqJKSjyqAcsEYDhQ4SuRaFxa3n7h7Qgt4";

     //const tx = await contractCollection.mint(maxNFT, CID);
     //await tx.wait();
     //console.log("Collection completed");
     
     for (let i = 0; i < maxNFT; i++) {
        //uri = CID + "/" + i + ".json";
        //const txm = await contractCollection.safeMint(deployer.address, uri);
        //await txm.wait();
        const url = await contractCollection.tokenURI(i);
        console.log("URL NFT", i, ":", url);
     }
    */
    
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
