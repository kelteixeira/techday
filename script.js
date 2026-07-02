const precoIngresso = 100
const form = document.getElementById("inscricao")
const precoIngresso = 100;
const form = document.getElementById("inscricao");
let nomeSalvo = localStorage.getItem("techday_nome");

function processarInscricao(nome, idade, possuiCupom) {
    let precoFinal = precoIngresso;


    if(idade < 16) {
        console.log("Inscrição bloqueada: "+nome+" não possuí idade miníma!")
    } else {
        if(possuiCupom) {
            precoFinal = precoFinal - 20;
        }
    }
    console.log("Inscrição confirmada para "+nome+"!")
    console.log("Valor à pagar: R$ "+precoFinal);
}

function simularVendaDeIngressos() {
    for(let i = 5; i > 0; i--){
        console.log("Corra! Faltam apenas "+i+" vagas para o TechDay 2026."); 
    }
    console.log("Vagas encerradas!");   
}



form.addEventListener(
    "submit", 
    function(event) {
        event.preventDefault();
        console.log("Formulário interceptado com sucesso! 😉")
        const valorNome = document.getElementById("nome-completo").value;
        const valorEmail = document.getElementById("email").value;

        if(valorNome.trim() === ""){
            alert("Por favor, preencha seu nome!");
        }
        if(valorEmail.trim() === ""){
            alert("Por favor, prencha seu e-mail!")
        }
        localStorage.setItem("techday_nome", valorNome)
        localStorage.setItem("techday_email", valorEmail)

        form.style.display="none";
        const secaoinscricao = document.getElementById("secao-inscricao");
        const mensagemSucesso = document.createElement("h3");
        mensagemSucesso.innerText = "Inscrição confirmada! Bem Vindo(a) ao TechDay 2026!"+valorNome+"!"
        mensagemSucesso.style.color = "green";
        secaoInscricao.appendChild(mensagemSucesso);

    }
)