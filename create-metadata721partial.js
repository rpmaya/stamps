const fs = require('fs');

const CID = "QmPFWex5TSXFgWRkHPEVBBDP4t9jLxRJ6DcwjHiq1NoyHF";

const MAX = 60;

async function main() {

    for (var i = 1; i <= MAX; i++) {

        const name = "metadata721/" + i + ".json";
        const table = "1A";
        let backgroundColor = "black-red-purple";
        let crownColor = "white";
        let special = "false";
        let specialType = "NA";

        if (i == 5) {
            special = true;
            specialType = "Crown Moved";
        } else if (i == 10) {
            special = true;
            specialType = "Crown Moved";
        } else if (i == 18) {
            special = true;
            specialType = "Crown at the Neck";
        } else if (i == 23) {
            special = true;
            specialType = "Crown in the Hair";
        } else if (i == 26) {
            special = true;
            specialType = "Crown at the Neck";
        } else if (i == 27) {
            special = true;
            specialType = "Crown at the Neck";
        } else if (i == 28) {
            special = true;
            specialType = "Crown Moved";
        } else if (i == 29) {
            special = true;
            specialType = "Crown in the Hair";
        } else if (i == 32) {
            special = true;
            specialType = "Effigy Looking Right ";
        } else if (i == 40) {
            special = true;
            specialType = "Crown in the Hair";
        } else if (i == 41) {
            special = true;
            specialType = "Crown in the Hair";
        } else if (i == 47) {
            special = true;
            specialType = "Crown at the Neck";
        } else if (i == 54) {
            special = true;
            specialType = "Crown Moved";
        } else if (i == 57) {
            special = true;
            specialType = "Effigy Looking Right ";


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
                name: 'Image' + i,
                description: 'Tavole ' + table,
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
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
