# Projeto de Plataforma para ONGs (Curso ADS)

Este repositório documenta o desenvolvimento progressivo de uma plataforma web para ONGs, como parte das atividades disciplinares do curso de Análise e Desenvolvimento de Sistemas. O projeto é dividido em quatro entregas incrementais.

## Status do Projeto

**Finalizado.** 🚀

## Estrutura do Repositório

O projeto é dividido em pastas, onde cada uma representa uma etapa de avaliação:

* **/Entrega I/**: Fundações e Estrutura. Foco em HTML5 semântico, formulários e estrutura de arquivos.
* **/Entrega II/**: Design System e Responsividade. Foco em CSS3, Flexbox, Grid, design responsivo e componentes de UI.
* **/Entrega III/**: Aplicação Web Dinâmica (SPA). Foco em JavaScript, manipulação do DOM, templates e arquitetura de Single Page Application.
* **/Entrega IV/**: Práticas Profissionais. Foco em Acessibilidade (WCAG 2.1 AA), Otimização e práticas de versionamento (Git).

## Tecnologias Utilizadas

* **HTML5 Semântico:** Estrutura seguindo as melhores práticas e roles ARIA.
* **CSS3:** Design System com Variáveis CSS, Flexbox, CSS Grid e media queries.
* **JavaScript (ES6+):** Manipulação do DOM, modularização (ESM), localStorage e arquitetura SPA (Single Page Application) com roteador baseado em hash.

## Funcionalidades Principais (Baseado na Entrega 4)

* Arquitetura SPA (Single Page Application) que carrega conteúdo dinamicamente.
* Design System completo com variáveis CSS.
* Layout 100% responsivo (Mobile-First).
* Componentes de UI: Modais, Alertas, Cards e Dropdowns.
* **Acessibilidade (WCAG 2.1 Nível AA):**
    * Suporte completo para navegação por teclado (links "skip", `:focus-visible`).
    * Suporte para leitores de tela (roles ARIA, `alt` tags, `lang` definida).
    * Alto contraste e **Modo Escuro (Dark Mode)** com persistência via `localStorage`.
* Validação de formulários com verificação de consistência de dados.

## Como Executar Localmente

O projeto da **Entrega 3** e **Entrega 4** é uma Single Page Application (SPA) e **não funciona** ao abrir o `index.html` diretamente (via `file:///...`).

Você **deve** usar um servidor local.

1.  Clone este repositório.
2.  Abra a pasta (`Entrega-3` ou `Entrega-4`) no **Visual Studio Code**.
3.  Instale a extensão **Live Server**.
4.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.

## Autor

Lucas Smidt
