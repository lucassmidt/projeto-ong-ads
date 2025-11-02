import * as views from './views.js';
import { initHamburger, initModalListeners, initThemeToggle } from './main.js';
import { initMascaras } from './mascaras.js';
import { initFormValidation } from './validation.js';

const routes = {
    '/': views.homeView,
    '/projetos': views.projetosView,
    '/cadastro': views.cadastroView
};

const appRoot = document.getElementById('app-root');

function router() {
    const path = window.location.hash.slice(1) || '/';
    const view = routes[path] || views.homeView; 
    
    appRoot.innerHTML = view();

    // Foco no conteúdo principal para leitores de tela
    appRoot.focus();

    if (path === '/') {
        initModalListeners();
    } else if (path === '/cadastro') {
        initMascaras();
        initFormValidation();
    }
}

window.addEventListener('hashchange', router);

window.addEventListener('load', () => {
    // Foca no body ao carregar
    document.body.focus();

    initHamburger();
    initThemeToggle(); // ADICIONADO NA ENTREGA 4
    router();
});