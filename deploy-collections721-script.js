const { ethers } = require("hardhat");

async function main() {
    
    let num = 1;
    const CID = "QmPFWex5TSXFgWRkHPEVBBDP4t9jLxRJ6DcwjHiq1NoyHF";
    const newCID = "";
    const max = 240;

    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    let txHash, txReceipt;
    const Collection = await ethers.getContractFactory("CryptoPennyBlack");

     /* Deploy Collections 721 Contract  
     const collection = await Collection.deploy();
     await collection.deployed()
     txHash = collection.deployTransaction.hash;
     txReceipt = await ethers.provider.waitForTransaction(txHash);
     let collectionContractAddress = txReceipt.contractAddress;
     console.log("Crypto Penny Black deployed to:", collectionContractAddress);
    */
     //const collectionAddress = collectionContractAddress;
     //const collectionAddress = "0x6E9d756b3e63b149107cC31dd637846Bd21DBc96"; //Rinkeby
     const collectionAddress = "0x976d70f29856679FAd867f700A350Ae701A3b14a"; //Ethereum
     const collection = Collection.attach(collectionAddress);

     let uri = newCID + "/" + num.toString() + ".json";
     let newUri = newCID + "/" + num.toString() + ".json";
     let tx = await collection.setTokenURI(num, newUri);
     //let tx = await collection.safeMint(deployer.address, uri);
     await tx.wait();
     console.log(num, " done!");

     //const owner = await collection.ownerOf(num);
     //console.log("Owner of ", num, ": ", owner);
    
/*
    for (let i = 61; i <= max; i++) {
        let uri = CID + "/" + i.toString() + ".json";
        let tx = await collection.safeMint(deployer.address, uri);
        await tx.wait();
        console.log(i, " done!");
    }
*/
  /*   
     for (let i = 60; i <= 120; i++) {
        const tx = await collection.setTokenURI(i, CID + "/" + (i-1).toString() + ".json");
        await tx.wait();
        const url = await collection.tokenURI(i);
        console.log("URL NFT", i, ":", url);
        const owner = await collection.ownerOf(i);
        console.log("Owner of ", i, ": ", owner);
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
