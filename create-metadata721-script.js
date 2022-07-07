const fs = require('fs');

const CID = "QmPFWex5TSXFgWRkHPEVBBDP4t9jLxRJ6DcwjHiq1NoyHF";

const MAX = 18;

async function main() {

    for (var i = 1; i <= MAX; i++) {

        const name = "metadata721/" + i + ".json";

        let backgroundColor;
        let crownColor;
        let images;

        if (i == 1) {
            backgroundColor = "black red purple";
            crownColor = "white";
            images = 240;
        } else if (i == 2) {
            backgroundColor = "white pink purple";
            crownColor = "white blue";
            images = 240;
        } else if (i == 3) {
            backgroundColor = "sky soft-pink-blue";
            crownColor = "fluo pink";
            images = 240;
        } else if (i == 4) {
            backgroundColor = "sky soft-pink-blue";
            crownColor = "fluo pink";
            images = 128;
        } else if (i == 5) {
            backgroundColor = "sky black";
            crownColor = "turquoise";
            images = 203;
        } else if (i == 6) {
            backgroundColor = "sky black-yellow";
            crownColor = "ligth yellow";
            images = 240;
        } else if (i == 7) {
            backgroundColor = "sky black-yellow";
            crownColor = "ligth yellow";
            images = 82;
        } else if (i == 8) {
            backgroundColor = "sky black-blue";
            crownColor = "strong red";
            images = 240;
        } else if (i == 9) {
            backgroundColor = "sky black-blue";
            crownColor = "strong red";
            images = 174;
        } else if (i == 10) {
            backgroundColor = "sky black-grey";
            crownColor = "grey";
            images = 240;
        } else if (i == 11) {
            backgroundColor = "sky black-grey";
            crownColor = "grey";
            images = 197;
        } else if (i == 12) {
            backgroundColor = "orange purple";
            crownColor = "strong green";
            images = 240;
        } else if (i == 13) {
            backgroundColor = "orange purple";
            crownColor = "strong green";
            images = 151;
        } else if (i == 14) {
            backgroundColor = "sky blue-turquoise";
            crownColor = "strong yellow";
            images = 240;
        } else if (i == 15) {
            backgroundColor = "sky blue-turquoise";
            crownColor = "strong yellow";
            images = 105;
        } else if (i == 16) {
            backgroundColor = "strong pink";
            crownColor = "cyan";
            num = 184;
        } else if (i == 17) {
            backgroundColor = "deep blue";
            crownColor = "lilac white";
            num = 92;
        } else if (i == 18) {
            backgroundColor = "lilac blue";
            crownColor = "white cyan";
            num = 8;
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
                "num_type": "NumberOfImages",
                "value": images
            }
        ]

        let nft = {
            description: 'Tavole Collection Image ' + i,
            image: 'https://gateway.pinata.cloud/ipfs/' + CID + '/' + i + '.jpg',
            name: 'Tavole Collection ' + i,
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
