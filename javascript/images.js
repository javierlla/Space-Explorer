import { Article, Event, Astronaut, Image, Launches, ImageOfTheDay} from './clases/clases.js';


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

function createImagesDom(images){

}

async function main() {
    
    const images = await searchForImages("space");
    createImagesDom(images);


}