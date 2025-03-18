import { Article, Event, Astronaut, Images} from './clases/clases.js';

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
}

/* 

Aqui abajo es donde voy a pillar los datos de la api y 
los voy a meter en las clases que he importado desde ./clases/clases.js

*/

async function datosApiClases() {

    //Primero voy a hacer un fetch a articles de: https://api.spaceflightnewsapi.net/v4/articles/

    try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        const data = await response.json();
        const articles = data.results;

        // console.log(articles)
        createArticles(articles)

        
      } catch (error) {
        console.error(error);
      }
    
}

function createArticles(articles) {

    let articlesClasses = [];

    for (let i = 0; i < articles.length; i++) {
        console.log(i)

        let article = new Article(articles[i].id, articles[i].title, articles[i].aithors, articles[i].url, articles[i].image_url);

        articlesClasses.push(article);

        // console.log(article)
    }

    console.log(articlesClasses);
    //Aqui ahora usariamos el DOM para meter el array de estas clases en el html

}

datosApiClases()