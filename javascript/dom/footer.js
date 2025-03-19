// footer.js

// Asegúrate de que el DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    // Función para crear el contenido del footer
    function createFooter() {
        const footer = document.getElementById('footer'); // Obtén el elemento <footer> del HTML

        // Crear el texto de derechos de autor
        const p = document.createElement('p');
        p.textContent = '© 2025 SpaceExplorer. All rights reserved.';

        // Crear los enlaces sociales
        const socialIconsDiv = document.createElement('div');
        socialIconsDiv.classList.add('social-icons');

        const socialLinks = [
            { name: 'Facebook', href: '#' },
            { name: 'Instagram', href: '#' },
            { name: 'Twitter', href: '#' }
        ];

        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.name;
            socialIconsDiv.appendChild(a);
        });

        footer.appendChild(p);
        footer.appendChild(socialIconsDiv);
    }

    createFooter();
});