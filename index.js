let form = document.getElementById("form-atividade");
const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    pegandoContato();
    atualizaTabela();
});

function pegandoContato() {
    let inputNome = document.querySelector(".nome")
    let inputNumero = document.querySelector(".contato")
    console.log(nomes);

    if(nomes.includes(inputNome.value)){
        alert(`Este contato já existe na agenda`)
    }else{
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `</tr>`

        linhas += linha
    }

    inputNome.value ='';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}