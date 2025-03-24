import { Image } from './clases/clases.js';

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

function createImagesDom(images) {
    const mainContent = document.getElementById('main-images');

    // Si no se encuentra el contenedor, mostramos un error
    if (!mainContent) {
        console.error('Contenedor principal no encontrado');
        return;
    }

    // Limpiar contenido previo
    mainContent.innerHTML = ''; // Limpiar cualquier imagen previa

    // Crear el contenedor de imágenes
    const imagesContainerWrapper = document.createElement('div');
    imagesContainerWrapper.classList.add('images-container-wrapper');  // Contenedor principal

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('images-container');  // Contenedor de las imágenes

    // Iterar sobre las imágenes y agregarlas al DOM
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = "Imagen del espacio";
        imgElement.classList.add('api-image');
        imagesContainer.appendChild(imgElement);
    });

    // Duplicar el contenedor de imágenes para crear el bucle continuo
    const duplicatedImagesContainer = imagesContainer.cloneNode(true);

    // Agregamos ambas partes (original y duplicada) al contenedor principal
    imagesContainerWrapper.appendChild(imagesContainer);
    imagesContainerWrapper.appendChild(duplicatedImagesContainer);

    // Agregar el contenedor de las imágenes al main
    mainContent.appendChild(imagesContainerWrapper);
}

async function main() {
    // Realizar búsqueda inicial con el valor predeterminado ("space")
    const images = await searchForImages('space');
    createImagesDom(images); // Crear las imágenes en el DOM
}

main();
