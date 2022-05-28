const fs = require('fs');

const CID = "QmcTrRsvDm18qbrgodXAcrbQktWtA7eiYtixBaz42ovpWY";

const MAX = 144;
//const MAXF = 2;

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

    for (var i = 1; i <= MAX; i++) {

        const name = "metadata/" + dec2hex(i) + ".json";

        let backgroundColor;
        let headColor;
        let letter = "A";
        let num = i % 9;
        if (num == 0) num = 9;

        if (i > 0 && i <= 9) {
            backgroundColor = "blue light";
            headColor = "white";
        } else if (i > 9 && i <= 18) {
            backgroundColor = "strong Pink";
            headColor = "red dark";
        } else if (i > 18 && i <= 27) {
            backgroundColor = 'lila';
            headColor = 'strong lila';
        } else if (i > 28 && i <= 36) {
            backgroundColor = 'soft red';
            headColor = 'green-yellow';
        } else if (i > 36 && i <= 45) {
            backgroundColor = 'orange';
            headColor = 'lila-yellow';
        } else if (i > 45 && i <= 54) {
            backgroundColor = 'deep blue';
            headColor = 'dark pink';
        } else if (i > 55 && i <= 63) {
            backgroundColor = 'pop pink';
            headColor = 'soft pink-yellow';
        }else if (i > 63 && i <= 72) {
            backgroundColor = 'yellow';
            headColor = 'blue-yellow';
        } else if (i > 72 && i <= 81) {
            backgroundColor = 'blue sky';
            headColor = 'yellow-pink';
        } else if (i > 81 && i <= 90) {
            backgroundColor = 'blue';
            headColor = 'red';
        } else if (i > 90 && i <= 99) {
            backgroundColor = 'light orange';
            headColor = 'red blue';
        } else if (i > 99 && i <= 108) {
            backgroundColor = 'strong red';
            headColor = 'black white';
        } else if (i > 108 && i <= 117) {
            backgroundColor = 'light green';
            headColor = 'soft orange';
        } else if (i > 117 && i <= 126) {
            backgroundColor = 'green pond';
            headColor = 'strawberry pink';
        } else if (i > 126 && i <= 135) {
            backgroundColor = 'yellow green';
            headColor = 'red green';
        } else if (i > 135 && i <= 144) {
            backgroundColor = 'blueberry';
            headColor = 'blue orange';
        }
/*
        const attF = { "pos_type": "File", "value": getFile(i) };
        const attC = { "pos_type": "Column", "value": getColumn(i) };
        atts.push(attF);
        atts.push(attC);
*/
        var atts = [
            {
                "color_type": "Background",
                "value": backgroundColor
            },
            {
                "color_type": "Head",
                "value": headColor
            },
            {
                "alfanum_type": "Letter",
                "value": letter
            },
            {
                "alfanum_type": "Number",
                "value": num.toString()
            }
        ]

        let nft = {
            description: 'Proof Collection Image: ' + i,
            image: 'https://gateway.pinata.cloud/ipfs/' + CID + '/' + i + '.jpg',
            name: 'Proof ' + i,
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
