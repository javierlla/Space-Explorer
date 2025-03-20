export function displayImageOfTheDay(imageOTD) {
    // Obtener el contenedor donde se va a agregar la imagen
    const mainContent = document.getElementById('main-content');
    
    // Si no se encuentra el contenedor, mostramos un error
    if (!mainContent) {
        console.error('Contenedor principal no encontrado');
        return;
    }

    // Crear el elemento <img> y asignar la URL de la imagen
    const imgElement = document.createElement('img');
    imgElement.src = imageOTD.url;
    imgElement.alt = imageOTD.title;
    imgElement.classList.add('api-image');
    mainContent.appendChild(imgElement);

    // Crear y mostrar el título de la imagen
    const titleElement = document.createElement('h2');
    titleElement.textContent = imageOTD.title;
    mainContent.appendChild(titleElement);

    // Crear y mostrar la explicación de la imagen
    const explanationElement = document.createElement('p');
    explanationElement.textContent = imageOTD.explanation;
    mainContent.appendChild(explanationElement);
}
