import { Article, Event, Image, Launches, ImageOfTheDay} from './clases/clases.js';

document.getElementById("searchForm").addEventListener("submit", function(event) {
    searchForImages(event);
});

async function searchForImages(e) {
    e.preventDefault();

    const query = document.getElementById("searchInput").value;
    
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
    document.getElementById("images").innerHTML = "";
    createImagesDom(imageClases)
}

function createImagesDom(images){

    const main_images = document.getElementById("images");
    for (let i = 0; i < images.length; i++) {
        const image = document.createElement('img');
        image.src = images[i].url;
        image.height = 300;
        image.width = 300;
        main_images.appendChild(image);
    }
}

// async function main() {
    

//     const images = await searchForImages();
//     createImagesDom(images);

// }

// main();