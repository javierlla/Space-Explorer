import { Article } from './clases/clases.js';

async function createArticles() {

    let articlesToClass = [];
    const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        const data = await response.json();
        const articles = data.results;

    for (let i = 0; i < articles.length; i++) {

        let article = new Article(articles[i].id, articles[i].title, articles[i].authors, articles[i].url, articles[i].image_url, articles[i].summary);

        articlesToClass.push(article);
    }

    return articlesToClass;
}

function createMainArticles(articleClasses) {
    const articles = document.getElementById("articles");

    const title = document.createElement("h1");
    title.textContent = "Articles";

    articles.appendChild(title);

    for (let i = 0; i < articleClasses.length; i++)
    {
        articleClasses[i].print_everything();
        const article = document.createElement('div');

        article.setAttribute("class", `card-article`);
        const article_title = document.createElement('h3');

        const image = document.createElement('img');
        article_title.textContent = articleClasses[i].title;
        image.src = articleClasses[i].image_url;
        image.height = 300;
        image.width = 300;

        const summary = document.createElement('p');
        summary.textContent = articleClasses[i].summary;

        const link = document.createElement('button');
        const text_in_button = document.createElement('p');
        text_in_button.setAttribute('class', 'p-button');
        text_in_button.textContent = "Article link";
        link.appendChild(text_in_button);
        link.setAttribute("class", 'btn');
        link.addEventListener('click', function(){
            window.open(articleClasses[i].url, '_blank');
        });

        article.appendChild(article_title);
        article.appendChild(image);
        article.appendChild(summary);
        article.appendChild(link);
        articles.appendChild(article);
    }
}

async function main() {
    const articleClasses = await createArticles();

    createMainArticles(articleClasses);
}

main();