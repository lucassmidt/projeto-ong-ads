// Exporta a função principal de inicialização
export function initFormValidation() {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    // Mostra a mensagem de erro
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('small.form-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
        input.style.borderColor = 'var(--color-danger)';
    }

    // Limpa a mensagem de erro
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('small.form-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
        input.style.borderColor = 'var(--color-border)';
    }

    // Limpa todos os erros do formulário
    function clearAllErrors(form) {
        form.querySelectorAll('input').forEach(clearError);
        const globalError = document.getElementById('form-error-message');
        if (globalError) {
            globalError.style.display = 'none';
            globalError.textContent = '';
        }
    }

    // LÓGICA DE VALIDAÇÃO DE CONSISTÊNCIA (Requisito obrigatório)
    function checkEmailConsistency() {
        const email = form.querySelector('#email');
        const emailConfirm = form.querySelector('#email-confirm');
        
        if (email.value !== emailConfirm.value && emailConfirm.value) {
            showError(emailConfirm, 'Os e-mails não são idênticos.');
            return false;
        } else {
            clearError(emailConfirm);
            return true;
        }
    }

    // Validação em tempo real (ao digitar)
    form.addEventListener('input', function(e) {
        if (e.target.id === 'email' || e.target.id === 'email-confirm') {
            checkEmailConsistency();
        } else if (e.target.validity.valid) {
             clearError(e.target);
        }
    });
    
    // Validação na Submissão
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio
        
        let isFormValid = true;
        clearAllErrors(form);

        // A. Valida campos obrigatórios (required)
        form.querySelectorAll('input[required]').forEach(input => {
            if (!input.value) {
                showError(input, 'Este campo é obrigatório.');
                isFormValid = false;
            }
        });

        // B. Valida consistência de E-mail
        if (!checkEmailConsistency()) {
            isFormValid = false;
        }
        
        // C. Valida Padrão (Pattern) - ex: CPF
        const cpf = form.querySelector('#cpf');
        if (cpf.value && !cpf.validity.patternMismatch && !new RegExp(cpf.pattern).test(cpf.value)) {
             showError(cpf, 'Formato de CPF inválido (use 000.000.000-00).');
             isFormValid = false;
        }

        // RESULTADO
        if (isFormValid) {
            form.innerHTML = `
                <div class="alert alert-success">
                    <strong>Cadastro enviado com sucesso!</strong>
                    <p>Obrigado por se juntar a nós.</p>
                </div>`;
        } else {
            const globalError = document.getElementById('form-error-message');
            globalError.textContent = 'Um ou mais campos estão incorretos. Por favor, verifique.';
            globalError.style.display = 'block';
            window.scrollTo(0,0);
        }
    });
}