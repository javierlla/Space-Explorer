import { Article, Event, Image, Launches, ImageOfTheDay} from './clases/clases.js';

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

function createMainArticles() {

}

async function main() {
    const articleClasses = await createArticles();
    createMainArticles(articleClasses);

    
}