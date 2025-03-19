import { Article, Event, Astronaut, Image, Launches, ImageOfTheDay} from './clases/clases.js';

const API_KEY = 'iHU6CXT2jGDVr9hMpRdhV1Bgn7BJiShISxKrqBGv';


async function getImageOfTheDay() {
   
    const response1 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data1 = await response1.json();
    const image = data1;

    let imageOTD = new ImageOfTheDay(image.date, image.explanation, image.title, image.url)

    return imageOTD;
}

function createIndexMainDom(imageOTD) {

        function createTitle(){
            const main = document.getElementById('main')
    
            const title = document.createElement('h1');
            title.textContent = 'Welcome to Space Explorer';
    
            const image = document.createElement('img');
            console.log(imageOTD.url)
            image.src = imageOTD.url;
            image.height = 600;
            image.width = 600;
    
            main.appendChild(title);
            main.appendChild(image);
        }
    
        createTitle();
}

async function main(){
    console.log("ENTRAAAAA")
    const imageOTD = await getImageOfTheDay();
    createIndexMainDom(imageOTD);
    
}

main();