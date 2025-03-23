import { Article } from './clases/clases.js';

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

function createMainArticles(articleClasses) {
    const articles = document.getElementById("articles");

    for (let i = 0; i < articleClasses.length; i++)
    {
        articleClasses[i].print_everything();
        const article = document.createElement('div');
        const article_title = document.createElement('h3');
        const authors = document.createElement('p');
        article_title.textContent = articleClasses[i].title;
        authors.textContent = articleClasses[i].authors;
        article.appendChild(article_title);
        article.appendChild(authors);
        articles.appendChild(article);
    }
}

async function main() {
    const articleClasses = await createArticles();

    createMainArticles(articleClasses);

}

main();