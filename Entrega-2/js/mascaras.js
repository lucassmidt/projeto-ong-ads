// Aguarda o documento carregar para executar os scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Máscara de CPF: 000.000.000-00
    const inputCpf = document.getElementById('cpf');
    if(inputCpf) {
        inputCpf.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o 3º dígito
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o 6º dígito
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen antes dos últimos 2 dígitos
            e.target.value = value.slice(0, 14); // Limita ao tamanho máximo
        });
    }

    // Máscara de Telefone: (00) 00000-0000
    const inputTelefone = document.getElementById('telefone');
    if(inputTelefone) {
        inputTelefone.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o 5º dígito (para celular)
            e.target.value = value.slice(0, 15); // Limita ao tamanho máximo
        });
    }

    // Máscara de CEP: 00000-000
    const inputCep = document.getElementById('cep');
    if(inputCep) {
        inputCep.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o 5º dígito
            e.target.value = value.slice(0, 9); // Limita ao tamanho máximo
        });
    }

});