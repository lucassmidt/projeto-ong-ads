// Importa os templates de cada página
import * as views from './views.js';
// Importa as funções de inicialização dos outros scripts
import { initHamburger, initModalListeners } from './main.js';
import { initMascaras } from './mascaras.js';
import { initFormValidation } from './validation.js';

// Define as "rotas" (o que carregar para cada hash)
const routes = {
    '/': views.homeView,
    '/projetos': views.projetosView,
    '/cadastro': views.cadastroView
};

// Onde o conteúdo da página será injetado
const appRoot = document.getElementById('app-root');

// A função principal do roteador
function router() {
    // Pega o "hash" da URL (ex: #/projetos)
    const path = window.location.hash.slice(1) || '/';
    
    // Encontra a view correspondente no objeto de rotas
    const view = routes[path] || views.homeView; // Padrão: home
    
    // Injeta o HTML da view dentro do <main>
    appRoot.innerHTML = view();

    // --- PÓS-RENDERIZAÇÃO ---
    // Após o HTML ser injetado, rodamos os scripts específicos daquela view
    
    if (path === '/') {
        // Se estiver na home, inicializa os listeners do modal
        initModalListeners();
    } else if (path === '/cadastro') {
        // Se estiver no cadastro, inicializa as máscaras e a validação
        initMascaras();
        initFormValidation();
    }
}

// "Ouve" a mudança de hash na URL (navegação)
window.addEventListener('hashchange', router);

// "Ouve" o carregamento inicial da página
window.addEventListener('load', () => {
    // Inicializa o hamburger (que está sempre presente no header)
    initHamburger();
    // Roda o roteador pela primeira vez
    router();
});