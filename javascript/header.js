// header.js

// Asegúrate de que el DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Función para crear el contenido del header
    function createHeader() {
        const header = document.getElementById('header'); // Obtén el elemento <header> del HTML

        // Crear el logo
        const logo = document.createElement('div');
        logo.classList.add('logo');
        logo.textContent = 'SpaceExplorer';

        // Crear el nav (barra de navegación)
        const nav = document.createElement('nav');

        // Crear los elementos de la lista (nav-links)
        const ul = document.createElement('ul');
        ul.classList.add('nav-links');

        // Lista de elementos de navegación
        const navItems = ['Articles', 'Events', 'Images', 'About'];
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        });

        // Crear el botón de menú hamburguesa
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.textContent = '☰';
        menuToggle.onclick = toggleMenu; // Asignar la función para mostrar/ocultar el menú

        // Agregar todo al nav
        nav.appendChild(ul);
        nav.appendChild(menuToggle);

        // Agregar el logo y el nav al header
        header.appendChild(logo);
        header.appendChild(nav);
    }

    // Función para alternar el menú
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('show');
    }

    // Llamar a la función para crear el header
    createHeader();
}); 