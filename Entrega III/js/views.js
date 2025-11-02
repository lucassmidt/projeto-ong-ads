// Template da Página Inicial (conteúdo do main do index.html da Entrega 2)
export function homeView() {
    return `
        <section class="page-section" style="background: #e9ecef; text-align: center;">
            <div class="container">
                <h1>Bem-vindo à ONG Exemplo</h1>
                <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-3);">Nossa missão é levar esperança e oportunidade...</p>
                <img src="imagens/banner-home.jpg" alt="Crianças sorrindo..." style="border-radius: var(--border-radius); box-shadow: var(--shadow);">
            </div>
        </section>
        <section class="page-section">
            <div class="container">
                <h2>Sobre Nós</h2>
                </div>
        </section>
        <section class="page-section" style="background: #e9ecef;">
            <div class="container">
                <h2>Demonstração de Componentes</h2>
                <div class="alert alert-success">
                    <strong>Sucesso!</strong> Este é um componente de alerta (alert).
                </div>
                <div class="alert alert-danger">
                    <strong>Erro!</strong> Este é outro componente de alerta.
                </div>
                <button class="btn btn-primary" id="openModalBtn">Abrir Modal</button>
            </div>
        </section>

        <div class="modal-overlay" id="demoModal">
            <div class="modal-content">
                <button class="modal-close" aria-label="Fechar modal">&times;</button>
                <h3>Este é um Modal</h3>
                <p>Este é um exemplo de componente de feedback "modal".</p>
                <button class="btn btn-primary modal-close">Entendi</button>
            </div>
        </div>
    `;
}

// Template da Página de Projetos (conteúdo do main do projetos.html da Entrega 2)
export function projetosView() {
    return `
        <section class="page-section">
            <div class="container">
                <h1>Nossos Projetos</h1>
                <p style="text-align: center; max-width: 600px; margin: 0 auto var(--spacing-4);">Conheça as iniciativas...</p>
                <div class="row">
                    <div class="col-md-6 col-lg-6" id="projeto-a">
                        <article class="card">
                            <img src="imagens/projeto-a.jpg" alt="Jovens..." class="card-img">
                            <div class="card-body">
                                <h3 class="card-title">Educação Digital para Jovens</h3>
                                <p class="card-text">Capacitamos jovens de comunidades carentes...</p>
                            </div>
                            <div class="card-footer"><span class="badge badge-accent">Educação</span></div>
                        </article>
                    </div>
                    <div class="col-md-6 col-lg-6" id="projeto-b">
                        <article class="card">
                            <img src="imagens/projeto-b.jpg" alt="Pessoas colhendo..." class="card-img">
                            <div class="card-body">
                                <h3 class="card-title">Horta Comunitária</h3>
                                <p class="card-text">Promovemos a segurança alimentar...</p>
                            </div>
                            <div class="card-footer"><span class="badge badge-accent">Sustentabilidade</span></div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Template da Página de Cadastro (conteúdo do main do cadastro.html da Entrega 2)
export function cadastroView() {
    // Adicionamos um campo "Confirmar E-mail" para a validação de consistência
    // Adicionamos <small> para mensagens de erro e novalidate ao <form>
    return `
        <section class="page-section">
            <div class="container">
                <h1>Formulário de Cadastro</h1>
                <p style="text-align: center; max-width: 600px; margin: 0 auto var(--spacing-4);">Preencha seus dados...</p>
                
                <div id="form-error-message" class="alert alert-danger" style="display: none;"></div>

                <div class="row" style="justify-content: center;">
                    <div class="col-md-8 col-lg-6">
                        <form action="#" method="post" id="form-cadastro" novalidate>
                            <fieldset>
                                <legend>Dados Pessoais</legend>
                                <div class="form-group">
                                    <label for="nome">Nome Completo:</label>
                                    <input type="text" id="nome" name="nome_completo" required minlength="3">
                                    <small class="form-error"></small>
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail:</label>
                                    <input type="email" id="email" name="email" required placeholder="seuemail@dominio.com">
                                    <small class="form-error"></small>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email-confirm">Confirmar E-mail:</label>
                                    <input type="email" id="email-confirm" name="email_confirm" required placeholder="Repita seu e-mail">
                                    <small class="form-error"></small>
                                </div>
                                
                                <div class="form-group">
                                    <label for="cpf">CPF:</label>
                                    <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00">
                                    <small class="form-error"></small>
                                </div>
                                <div class="form-group">
                                    <label for="telefone">Telefone:</label>
                                    <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
                                    <small class="form-error"></small>
                                </div>
                            </fieldset>
                            <br>
                            <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Cadastro</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}