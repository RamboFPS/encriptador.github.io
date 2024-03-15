var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDescriptar = document.querySelector(".btn-descriptar");
var botaoCopiar = document.querySelector(".btn-copiar");
var textAreaEncriptar = document.querySelector("#textarea-encriptar");
var textAreaMensagem = document.querySelector("#mensagem");

botaoEncriptar.addEventListener("click", encriptar);
botaoDescriptar.addEventListener("click", descriptar);
botaoCopiar.addEventListener("click", copiar);

function encriptar() {
    var texto = textAreaEncriptar.value;
    var textoEncriptado = texto
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
    textAreaMensagem.value = textoEncriptado;

    if (texto === "") {
        alert("Por favor, digite um texto antes de encriptar.");
        return;
    }
}

function descriptar() {
    var texto = textAreaMensagem.value;
    var textoDescriptado = texto
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");
    textAreaEncriptar.value = textoDescriptado;

    if (texto === "") {
        alert("Por favor, digite um texto antes de descriptar.");
        return;
    }
}

function copiar() {
    textAreaMensagem.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");


    var mensagemImagem = document.querySelector("#mensagem");
    mensagemImagem.style.backgroundImage = "url(./images/cadeado.jpg)";

}

botaoEncriptar.addEventListener("click", function () {
    var mensagemImagem = document.querySelector("#mensagem");
    var mensagemInterna = document.querySelector(".mensagem-interna")
    mensagemImagem.style.backgroundImage = "none";
    mensagemInterna.style.display = "none";
});

