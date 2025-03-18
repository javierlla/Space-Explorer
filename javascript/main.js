import { Article, Event, Astronaut, Image, Launches, ImageOfTheDay} from './clases/clases.js';

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
}

/* 

Aqui abajo es donde voy a pillar los datos de la api y 
los voy a meter en las clases que he importado desde ./clases/clases.js

*/

const API_KEY = 'iHU6CXT2jGDVr9hMpRdhV1Bgn7BJiShISxKrqBGv';

async function datosApiClases() {

    //Primero voy a hacer un fetch a articles de: https://api.spaceflightnewsapi.net/v4/articles/

    try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        const data = await response.json();
        const articles = data.results;

        // console.log(articles)
        createArticles(articles)

        //Nasa Image of the day api endpoint

        const response1 = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        const data1 = await response1.json();
        const image = data1;

        createImageOfTheDay(image);

      } catch (error) {
        console.error(error);
      }
    
}

function createArticles(articles) {

    let articlesClasses = [];

    for (let i = 0; i < articles.length; i++) {

        let article = new Article(articles[i].id, articles[i].title, articles[i].aithors, articles[i].url, articles[i].image_url);

        articlesClasses.push(article);

    }

    // console.log(articlesClasses);
    //Aqui ahora usariamos el DOM para meter el array de estas clases en el html

}

function createImageOfTheDay(image) {
    
    let imageOTD = new ImageOfTheDay(image.date, image.explanation, image.title, image.url)

    // console.log(imageOTD)
}

// datosApiClases();


async function searchForImages(query) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
    const data = await response.json();

    // Access items array
    const items = data.collection.items;

    // Extract image URLs

    let imageClases = [];

    const imageLinks = items
        .map(item => item.links?.[0]?.href) // Get the first image link if it exists
        .filter(link => link); // Remove undefined values
        
    for (let i = 0; i < imageLinks.length; i++) {
        // console.log(imageLinks[i])
        let newImage = new Image(imageLinks[i]);

        imageClases.push(newImage);
    }

}

searchForImages("space");