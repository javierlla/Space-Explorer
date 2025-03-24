import { Article, Image, Launches, ImageOfTheDay} from './clases/clases.js';

// function createTitle() {
//     const main = document.getElementById("main-images");
//     const title = document.createElement("h1");
//     title.textContent = "Search for Images in the NASA API!";
//     main.appendChild(title);
// }

// document.getElementById("searchForm").addEventListener("submit", function(event) {
//     searchForImages(event);
//     // createImagesDom()
// });

async function searchForImages(query = "space") {
    // e.preventDefault();

    // const query = document.getElementById("searchInput").value;
    const mainContent = document.getElementById('main-images');
    console.log("entra aqui")

    const form = document.getElementById("searchForm");
    if (!form )
        {
        console.log("creating form ")
        const form = document.createElement("form");
        form.setAttribute("id", "searchForm");

        const input = document.createElement("input");
        input.type = "text";
        input.setAttribute("id", "searchInput");
        input.placeholder = "Search images...";

        const button = document.createElement("button");
        button.setAttribute("id", "button-images");
        button.type = "submit";
        button.textContent = "Search";

        form.appendChild(input);
        form.appendChild(button);
        mainContent.appendChild(form);

        // Add event listener for user input
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            const userQuery = input.value.trim();
            if (userQuery) {
                await searchForImages(userQuery);
            }
        });
    }

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
        // mainContent.appendChild(form);
        createImagesDom(imageClases);

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

async function main()
{
    await searchForImages();
}

main();

// function createImagesDom(images){

//     const main_images = document.getElementById("images");
//     for (let i = 0; i < images.length; i++) {
//         const image = document.createElement('img');
//         image.src = images[i].url;
//         image.height = 300;
//         image.width = 300;
//         main_images.appendChild(image);
//     }
// }
