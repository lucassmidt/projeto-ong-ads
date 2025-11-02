export function initMascaras() {
    const inputCpf = document.getElementById('cpf');
    if (inputCpf) {
        inputCpf.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, ''); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
            e.target.value = value.slice(0, 14); 
        });
    }

    const inputTelefone = document.getElementById('telefone');
    if (inputTelefone) {
        inputTelefone.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); 
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 15); 
        });
    }

    const inputCep = document.getElementById('cep');
    if (inputCep) {
        inputCep.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2'); 
            e.target.value = value.slice(0, 9); 
        });
    }
}