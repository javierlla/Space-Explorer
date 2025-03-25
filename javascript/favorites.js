document.addEventListener('DOMContentLoaded', function () {
    const favoritesContainer = document.getElementById('favorites');
    
    // Obtener los artículos favoritos almacenados en localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No tienes artículos favoritos todavía.</p>';
    } else {
        favorites.forEach((article, index) => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('card-article');
            
            // Crear la estructura de la carta
            const articleTitle = document.createElement('h3');
            articleTitle.textContent = article.title;

            const articleImage = document.createElement('img');
            articleImage.src = article.image_url;
            articleImage.alt = article.title;
            articleImage.width = 500;
            articleImage.height = 500;

            const articleSummary = document.createElement('p');
            articleSummary.textContent = article.summary;

            const articleLink = document.createElement('button');
            articleLink.textContent = "Leer artículo";
            articleLink.classList.add('btn');
            articleLink.addEventListener('click', function () {
                window.open(article.url, '_blank');
            });

            // Crear el botón de "quitar" con una cruz
            const removeButton = document.createElement('button');
            removeButton.textContent = '❌';
            removeButton.classList.add('remove-btn');
            removeButton.addEventListener('click', function () {
                // Eliminar el artículo de favoritos
                favorites.splice(index, 1);
                // Actualizar el localStorage
                localStorage.setItem('favorites', JSON.stringify(favorites));
                // Eliminar el artículo de la vista
                articleCard.remove();
                // Si no quedan favoritos, mostrar un mensaje
                if (favorites.length === 0) {
                    favoritesContainer.innerHTML = '<p>No tienes artículos favoritos todavía.</p>';
                }
            });

            // Agregar los elementos a la carta
            articleCard.appendChild(articleImage);
            articleCard.appendChild(articleTitle);
            articleCard.appendChild(articleSummary);
            articleCard.appendChild(articleLink);
            articleCard.appendChild(removeButton);  // Agregar el botón de "quitar"

            favoritesContainer.appendChild(articleCard);
        });
    }
});