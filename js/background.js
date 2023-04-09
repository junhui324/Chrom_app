const images = getImageArray(20);

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

function getImageArray(num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(`${i}.jpg`);
    }
    return result;
}
