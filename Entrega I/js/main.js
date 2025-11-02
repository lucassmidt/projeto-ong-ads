document.addEventListener('DOMContentLoaded', function() {

    // --- 1. LÓGICA DO MENU HAMBURGER ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe 'active' no botão (para o "X")
            menuToggle.classList.toggle('active');
            // Alterna a classe 'active' no menu (para exibir/esconder)
            navMenu.classList.toggle('active');
        });
    }

    // --- 2. LÓGICA DO DROPDOWN EM MOBILE ---
    // Em mobile, o dropdown não deve abrir no hover, mas no clique
    const dropdowns = document.querySelectorAll('.nav-menu .dropdown > a');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Verifica se estamos em visualização mobile
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Previne a navegação
                const parentLi = dropdown.parentElement;
                parentLi.classList.toggle('active');
            }
        });
    });

    // --- 3. LÓGICA DO MODAL ---
    const modalTrigger = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('demoModal');
    const modalClose = document.querySelector('.modal-close');

    if (modalTrigger && modalOverlay && modalClose) {
        // Abrir modal
        modalTrigger.addEventListener('click', (). => {
            modalOverlay.classList.add('active');
        });

        // Fechar modal clicando no "X"
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        // Fechar modal clicando fora (no overlay)
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

});