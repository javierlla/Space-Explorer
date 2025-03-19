// header.js

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").innerHTML = `
    <nav>
        <ul class="nav-links">
            <li><a href="../html/index.html">Home</a></li>
            <li><a href="../html/articles.html">Articles</a></li>
            <li><a href="../html/images.html">Images</a></li>
        </ul>
    </nav>
`;

    function createHeader() {

        const logo = document.createElement('div');
        logo.classList.add('logo');
        logo.textContent = 'SpaceExplorer';

    }

    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

    createHeader();
}); 