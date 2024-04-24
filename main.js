const form = document.getElementById('form-cadastro');
let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

const inputSeuNome = document.getElementById('seu-nome');
const inputSeuNumero = document.getElementById('seu-numero');

let linha ='<tr>'
linha += `<th>${inputSeuNome.value}</th>`
linha += `<th>${inputSeuNumero.value}</th>`
linha += `<th>${inputSeuNumero.value >= 1 ? 'Cadastrado' : 'nAprovado'}`
linha += '</tr>'

linhas += linha

const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas;
}) 
