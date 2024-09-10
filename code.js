async function pesquisarCep() {
    var cep = document.getElementById("cep");

    if (cep.value == "") alert("CEP Vazio")
        else {
    //Chamada da API
    //viacep.com.br/ws/62823000/json/
    var resposta = await fetch ("viacep.com.br/ws/62823000/json/");
    var dados = await resposta.json();

    console.log(dados);
    console.log(dados.localidade);
    console.log(dados.regiao);
    
    var logradouro = document.getElementById("log");
    var bairro = document.getElementById("bairro");
    }
}