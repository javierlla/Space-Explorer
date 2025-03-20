import { Article, Event, Image, Launches, ImageOfTheDay } from './clases/clases.js';

async function searchForImages(query) {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
    const data = await response.json();

    const items = data.collection.items;
    
    // Obtener solo los enlaces de las imágenes
    const imageLinks = items
        .map(item => item.links?.[0]?.href) // Acceder al primer enlace de cada item
        .filter(link => link); // Filtrar los enlaces vacíos

    let imageClases = [];

    // Crear las instancias de la clase Image para cada enlace
    for (let i = 0; i < imageLinks.length; i++) {
        let newImage = new Image(imageLinks[i]); // Crear objeto Image con la URL
        imageClases.push(newImage); // Agregarlo al arreglo
    }

    return imageClases;
}

function createImagesDom(images) {
    // Obtener el contenedor donde se va a agregar la imagen
    const mainContent = document.getElementById('main-images');
    
    // Si no se encuentra el contenedor, mostramos un error
    if (!mainContent) {
        console.error('Contenedor principal no encontrado');
        return;
    }

    // Iterar sobre el arreglo de imágenes y agregar cada imagen al DOM
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url; 
        imgElement.classList.add('api-image');
        mainContent.appendChild(imgElement);

    });
}

async function main() {
    
    const images = await searchForImages("space");
    
    // Llamar a la función que crea el contenido en el DOM
    createImagesDom(images);
}

main();
