// Template da Página Inicial
export function homeView() {
    return `
        <section class="page-section" style="text-align: center;">
            <div class="container">
                <h1>Bem-vindo à ONG Exemplo</h1>
                <p style="font-size: var(--font-size-lg); margin-bottom: var(--spacing-3);">Nossa missão é levar esperança e oportunidade...</p>
                <img src="imagens/banner-home.jpg" alt="Crianças sorrindo e participando de atividades da ONG" style="border-radius: var(--border-radius); box-shadow: var(--shadow);">
            </div>
        </section>

        <section class="page-section">
            <div class="container">
                <h2>Sobre Nós</h2>
                <div class="row">
                    <div class="col-lg-8">
                        <p>Fundada em 2010, a ONG Exemplo já impactou mais de 5.000 vidas...</p>
                    </div>
                    <div class="col-lg-4">
                        <h3>Contato</h3>
                        <address>
                            Email: <a href="mailto:contato@ongexemplo.org">contato@ongexemplo.org</a><br>
                            Telefone: <a href="tel:+5571999998888">(71) 99999-8888</a><br>
                        </address>
                    </div>
                </div>
            </div>
        </section>

        <section class="page-section" style="background: var(--border-color);">
            <div class="container">
                <h2>Demonstração de Componentes</h2>
                <div class="alert alert-success">
                    <strong>Sucesso!</strong> Este é um componente de alerta (alert).
                </div>
                <button class="btn btn-primary" id="openModalBtn">Abrir Modal</button>
            </div>
        </section>

        <div class="modal-overlay" id="demoModal" role="dialog" aria-modal="true" aria-labelledby="modal-title" style="display: none;">
            <div class="modal-content">
                <button class="modal-close" aria-label="Fechar modal">&times;</button>
                <h3 id="modal-title">Este é um Modal</h3>
                <p>Este é um exemplo de componente de feedback "modal".</p>
                <button class="btn btn-primary modal-close">Entendi</button>
            </div>
        </div>
    `;
}

// Template da Página de Projetos
export function projetosView() {
    return `
        <section class="page-section">
            <div class="container">
                <h1>Nossos Projetos</h1>
                <p style="text-align: center; max-width: 600px; margin: 0 auto var(--spacing-4);">Conheça as iniciativas...</p>
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <article class="card">
                            <img src="imagens/projeto-a.jpg" alt="Jovens em uma sala de aula de informática" class="card-img">
                            <div class="card-body">
                                <h3 class="card-title">Educação Digital para Jovens</h3>
                                <p class="card-text">Capacitamos jovens de comunidades carentes...</p>
                            </div>
                            <div class="card-footer"><span class="badge badge-accent">Educação</span></div>
                        </article>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <article class="card">
                            <img src="imagens/projeto-b.jpg" alt="Pessoas colhendo vegetais em uma horta comunitária" class="card-img">
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

// Template da Página de Cadastro
export function cadastroView() {
    return `
        <section class="page-section">
            <div class="container">
                <h1>Formulário de Cadastro</h1>
                <p style="text-align: center; max-width: 600px; margin: 0 auto var(--spacing-4);">Preencha seus dados...</p>
                
                <div id="form-error-message" class="alert alert-danger" style="display: none;" role="alert"></div>

                <div class="row" style="justify-content: center;">
                    <div class="col-md-8 col-lg-6">
                        <form action="#" method="post" id="form-cadastro" novalidate>
                            <fieldset>
                                <legend>Dados Pessoais</legend>
                                <div class="form-group">
                                    <label for="nome">Nome Completo:</label>
                                    <input type="text" id="nome" name="nome_completo" required minlength="3" aria-describedby="nome-error">
                                    <small id="nome-error" class="form-error"></small>
                                </div>
                                <div class="form-group">
                                    <label for="email">E-mail:</label>
                                    <input type="email" id="email" name="email" required placeholder="seuemail@dominio.com" aria-describedby="email-error">
                                    <small id="email-error" class="form-error"></small>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email-confirm">Confirmar E-mail:</label>
                                    <input type="email" id="email-confirm" name="email_confirm" required placeholder="Repita seu e-mail" aria-describedby="email-confirm-error">
                                    <small id="email-confirm-error" class="form-error"></small>
                                </div>
                                
                                <div class="form-group">
                                    <label for="cpf">CPF:</label>
                                    <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" aria-describedby="cpf-error">
                                    <small id="cpf-error" class="form-error"></small>
                                </div>
                                <div class="form-group">
                                    <label for="telefone">Telefone:</label>
                                    <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" aria-describedby="tel-error">
                                    <small id="tel-error" class="form-error"></small>
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