import { Article, Image, Launches, ImageOfTheDay} from './clases/clases.js';

const API_KEY = 'iHU6CXT2jGDVr9hMpRdhV1Bgn7BJiShISxKrqBGv';


async function getImageOfTheDay() {
   
    const response1 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data1 = await response1.json();
    const image = data1;

    let imageOTD = new ImageOfTheDay(image.date, image.explanation, image.title, image.url)

    return imageOTD;
}

function createIndexMainDom(imageOTD) {
    const main = document.getElementById('main');

    const title = document.createElement('h1');
    title.setAttribute("class", "title-index");
    title.textContent = 'Welcome to Space Explorer';

    const title2 = document.createElement('h2');
    title2.textContent = "This is the image of the day from NASA's API!"

    const image = document.createElement('img');
    image.setAttribute("class", "IOTD");
    image.src = imageOTD.url;

    const card = document.createElement("div");
    card.setAttribute("class", 'card-article');

    const explanation = document.createElement('p');
    explanation.setAttribute("class", "pIOTD");
    explanation.textContent = imageOTD.explanation;

    card.appendChild(explanation);

    const api_title = document.createElement('h2');
    api_title.textContent = 

    main.appendChild(title);
    main.appendChild(title2);
    main.appendChild(image);
    // main.appendChild(card);
}

async function main() {
    getImageOfTheDay();
    const imageOTD = await getImageOfTheDay();
    createIndexMainDom(imageOTD);
}

main();