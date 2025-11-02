// 1. Lógica do Menu Hambúrguer (Sempre ativa)
export function initHamburger() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fecha o menu ao clicar em um link (essencial para SPA)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Dropdown em mobile
    const dropdowns = document.querySelectorAll('.nav-menu .dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                const parentLi = dropdown.parentElement;
                parentLi.classList.toggle('active');
            }
        });
    });
}

// 2. Lógica do Modal (Só roda na Home)
export function initModalListeners() {
    const modalTrigger = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('demoModal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    if (modalTrigger && modalOverlay && modalCloseButtons) {
        modalTrigger.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });
        modalCloseButtons.forEach(button => {
            button.addEventListener('click', () => {
                modalOverlay.classList.remove('active');
            });
        });
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
}