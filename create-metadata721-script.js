const fs = require('fs');

const CID = "QmPFWex5TSXFgWRkHPEVBBDP4t9jLxRJ6DcwjHiq1NoyHF";

const MAX = 240;

async function main() {

    for (var i = 1; i <= MAX; i++) {

        const name = "metadata/" + i + ".json";
        const table = "1A";
        let backgroundColor = "black-red-purple";
        let crownColor = "white";
        let special = false;
        let specialType = "NA";

        if (i == 5 || i == 10 || i == 28 || i == 54 || i == 68 || i == 129 || i == 148 || i == 153 || i == 161 || i == 168 || i == 228 || i == 229) {
            special = true;
            specialType = "Crown Moved";

        } else if (i == 18 || i == 26 || i == 27 || i == 47 || i == 145 || i == 163 || i == 184 || i == 207 || i == 225) {
            special = true;
            specialType = "Crown at the Neck";

        } else if (i == 23 || i == 29 || i == 40 || i == 41 || i == 90 || i == 146 || i == 155 || i == 232) {
            special = true;
            specialType = "Crown in the Hair";

        } else if (i == 32 || i == 57 || i == 119 || i == 179 || i == 230) {
            special = true;
            specialType = "Effigy Looking Right ";

        } else if (i == 76 || i == 77 || i == 215) {
            special = true;
            specialType = "Missing Effigy";
        }

        var atts = [
            {
                "trait_type": "Background color",
                "value": backgroundColor
            },
            {
                "trait_type": "Crown color",
                "value": crownColor
            },
            {
                "trait_type": "Is Special",
                "value": special
            },
            {
                "trait_type": "Special type",
                "value": specialType
            }
        ]

        let nft = {
            name: 'CryptPennyBlack ' + i,
            description: 'Collection0 ' + table,
            image: 'https://gateway.pinata.cloud/ipfs/' + CID + '/' + i + '.jpg',
            attributes: atts
        }

        const data = JSON.stringify(nft, null, 4);

        try {
            fs.writeFileSync(name, data);
            console.log("JSON NFT", i, "saved.");
        } catch (error) {
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
