// 1. Lógica do Menu Hambúrguer
export function initHamburger() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuList = document.getElementById('nav-menu-list');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isActive);
        });
    }

    navMenuList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    const dropdowns = document.querySelectorAll('.nav-menu .dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                const parentLi = dropdown.parentElement;
                const isActive = parentLi.classList.toggle('active');
                dropdown.setAttribute('aria-expanded', isActive);
            }
        });
    });
}

// 2. Lógica do Modal
export function initModalListeners() {
    const modalTrigger = document.getElementById('openModalBtn');
    const modalOverlay = document.getElementById('demoModal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    if (!modalTrigger || !modalOverlay) return;

    const openModal = () => {
        modalOverlay.style.display = 'flex';
        modalOverlay.querySelector('.modal-content button, .modal-content a').focus();
    };

    const closeModal = () => {
        modalOverlay.style.display = 'none';
        modalTrigger.focus();
    };

    modalTrigger.addEventListener('click', openModal);

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // ACESSIBILIDADE: Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModal();
        }
    });
}

// 3. LÓGICA DO TEMA (DARK MODE) - NOVO
export function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const docElement = document.documentElement; 

    // 1. Verifica preferência salva
    let currentTheme = localStorage.getItem('theme');

    // 2. Se não tiver, verifica preferência do SO
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // 3. Aplica o tema
    docElement.setAttribute('data-theme', currentTheme);

    // 4. Adiciona o listener ao botão
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = docElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        docElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}