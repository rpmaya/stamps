const fs = require('fs');

const CID = "QmPFWex5TSXFgWRkHPEVBBDP4t9jLxRJ6DcwjHiq1NoyHF";

const MAX = 240;

async function main() {

    for (var i = 61; i <= MAX; i++) {

        const name = "metadata721b/" + i + ".json";
        const table = "1A";
        let backgroundColor = "black-red-purple";
        let crownColor = "white";
        let special = false;
        let specialType = "NA";

        if (i == 68 || i == 129 || i == 148 || i == 153 || i == 161 || i == 168 || i == 228 || i == 229) {
            special = true;
            specialType = "Crown Moved";
        } else if (i == 76 || i == 77 || i == 215) {
            special = true;
            specialType = "Missing Effigy";
        } else if (i == 90 || i == 146 || i == 155 || i == 232) {
            special = true;
            specialType = "Crown in the Hair";
        } else if (i == 145 || i == 163 || i == 184 || i == 207 || i == 225) {
            special = true;
            specialType = "Crown at the Neck";
        } else if (i == 119 || i == 179 || i == 230) {
            special = true;
            specialType = "Effigy Looking Right";
        }
        var atts = [
            {
                "color_type": "Background",
                "value": backgroundColor
            },
            {
                "color_type": "Crown",
                "value": crownColor
            },
            {
                "special_type": "IsSpecial",
                "value": special
            },
            {
                "special_type": "Type",
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