// header.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
    <div class="logo">SpaceExplorer</div>
    <button class="menu-toggle" aria-label="Toggle navigation menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </button>
    <nav>
        <ul class="nav-links">
            <li><a href="../html/index.html">Home</a></li>
            <li><a href="../html/articles.html">Articles</a></li>
            <li><a href="../html/images.html">Images</a></li>
            <li><a href="../html/rockets.html">Rockets</a></li>
            <li><a href="../html/favorites.html">Favorites</a></li>
        </ul>
    </nav>
`;

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener("click", function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    })

    // function createHeader() {

    //     const logo = document.createElement('div');
    //     logo.classList.add('logo');
    //     logo.textContent = 'SpaceExplorer';

    // }

    // function toggleMenu() {
    //     const navLinks = document.querySelector('.nav-links');
    //     navLinks.classList.toggle('show');
    // }

    // createHeader();
}); 