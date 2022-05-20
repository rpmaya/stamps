
const fs = require('fs');

const MAX = 4;
const MAXF = 2;

function dec2hex(n) {
    return Number(n).toString(16).padStart(64, '0');
}

function getFile(n) {
    var x = n % MAXF;
    if (x === 0) x = MAXF;
    return x;
}

function getColumn(n) {
    var y = Math.ceil(n / MAXF);
    return y;
}

async function main() {  

    for (var i = 1; i <= MAX; i++) {

        const name = "metadata/" + dec2hex(i) + ".json";

        var atts = [
            {
                "trait_type": "Eyes",
                "value": "Blue"
            },
            {
                "trait_type": "Mouth",
                "value": "Surprise"
            }
        ]

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

        
        nft = {
                description: 'Test '+ i, 
                image: 'https://domain/' + i + '.jpg',
                name: 'name '+ i,
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
