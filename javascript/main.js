import { Article, Event, Astronaut, Image, Launches, ImageOfTheDay} from './clases/clases.js';

/* 

Aqui abajo es donde voy a pillar los datos de la api y 
los voy a meter en las clases que he importado desde ./clases/clases.js

*/

const API_KEY = 'iHU6CXT2jGDVr9hMpRdhV1Bgn7BJiShISxKrqBGv';

async function createArticles() {

    let articlesToClass = [];
    const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        const data = await response.json();
        const articles = data.results;

    for (let i = 0; i < articles.length; i++) {

        let article = new Article(articles[i].id, articles[i].title, articles[i].aithors, articles[i].url, articles[i].image_url);

        articlesToClass.push(article);
    }

    return articlesToClass;
}

async function createImageOfTheDay() {
   
    const response1 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const data1 = await response1.json();
    const image = data1;

    let imageOTD = new ImageOfTheDay(image.date, image.explanation, image.title, image.url)

    return imageOTD;
}

async function searchForImages(query) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
    const data = await response.json();

    const items = data.collection.items;
        
    const imageLinks = items
    .map(item => item.links?.[0]?.href)
    .filter(link => link);

    let imageClases = [];
    
    for (let i = 0; i < imageLinks.length; i++) {
        let newImage = new Image(imageLinks[i]);
        
        imageClases.push(newImage);
    }
    return imageClases;
}

function createMainDom(imageOTD) {

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

function createImagesDom(images){

}

function createMainArticles() {

}

// function createImagesDom(images) {
    
//     function createImages() {
//         const 
//     }
// }

async function main(){
    const imageOTD = await createImageOfTheDay();
    console.log(imageOTD.url)
    createMainDom(imageOTD);
    const images = await searchForImages("space");
    createImagesDom(images);

    const articleClasses = await createArticles();
    
}

main();