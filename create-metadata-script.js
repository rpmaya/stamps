const fs = require('fs');

const IPFS_DIR = "QmRNZcRWcwP6nARU6whW4dDCKMDjoXsXECEwgUCDYnPDaX";
const COLLECTION = "01";
const MAX = 9;
const ini = 1;
const fin = ini + MAX - 1;

function dec2hex(n) {
    return Number(n).toString(16).padStart(64, '0');
}

/*
function getFile(n) {
    var x = n % MAXF;
    if (x === 0) x = MAXF;
    return x;
}

function getColumn(n) {
    var y = Math.ceil(n / MAXF);
    return y;
}
*/
async function main() {  

    for (var i = ini; i <= fin; i++) {

        const name = "metadata/" + dec2hex(i) + ".json";

        var atts = [
            {
                "trait_type": "Background",
                "value": "Blue"
            }
        ]
/*
        if (i === 2) {
            const att = {"trait_type":"Noise", "value":"small"};
            atts.push(att);
        } else if (i === 3) {
            const att = {"trait_type":"Noise", "value":"big"};
            atts.push(att);
        } else {
            const att = {"trait_type":"Noise", "value":"normal"};
            atts.push(att);
        }

        const attF = {"pos_type":  "File", "value": getFile(i)};
        const attC = {"pos_type": "Column", "value": getColumn(i)};
        atts.push(attF);
        atts.push(attC);
*/
        
        nft = {
                description: 'Test Collection ' + COLLECTION + ' Image: ' + i, 
                image: 'https://gateway.pinata.cloud/ipfs/' + IPFS_DIR + '/A' + i + '.JPG',
                name: 'name '+ i + ' colection ' + COLLECTION,
                attributes: atts
        }


        const data = JSON.stringify(nft, null, 4);

        try{
            fs.writeFileSync(name, data);
            console.log("JSON NFT", i, "saved.");
        }catch(error) {
            console.error(error);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
