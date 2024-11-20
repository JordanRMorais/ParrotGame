
let qntCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));


while(isNaN(qntCartas) || qntCartas < 4 || qntCartas > 14 || qntCartas % 2 !== 0){
    qntCartas = parseInt(prompt("Você não escolheu um número válido. Com quantas cartas você quer jogar?"));
};


const imagens = ["bobrossparrot.gif", 
        "explodyparrot.gif",
        "fiestaparrot.gif",
        "metalparrot.gif",
        "revertitparrot.gif",
        "tripletsparrot.gif",
        "unicornparrot.gif"];


const cartasClicadas = imagens.slice(0, qntCartas / 2).flatMap(img => [img, img]);
    cartasClicadas.sort(() => Math.random() - 0.5);

const lista = document.querySelector(".feed");
    lista.innerHTML = "";

cartasClicadas.forEach((imagem, index) => {
    lista.innerHTML += `
      <div class="card" data-card="${imagem}" onclick="virarCarta(this)">
        <div class="front-face face">
          <img src="projeto__parrots__imagens/assets/back.png">
        </div>
        <div class="back-face face">
          <img src="projeto__parrots__imagens/assets/${imagem}">
        </div>
      </div>`;
});

let cartaUm = null;
let cartaDois = null;
let cliques = 0;

function virarCarta(carta) {
    if (carta.classList.contains("virada") || cartaDois) 
        return;
    carta.classList.add("virada");
    cliques++;
  
    if (!cartaUm) {
        cartaUm = carta;
    } 
    
    else {
        cartaDois = carta;
  
    const primeiraImagem = cartaUm.getAttribute("data-card");
    const segundaImagem = cartaDois.getAttribute("data-card");
  
        if (primeiraImagem === segundaImagem) {
     
        cartaUm = null;
        cartaDois = null;
      } 
        else {
    
        setTimeout(() => {
            cartaUm.classList.remove("virada");
            cartaDois.classList.remove("virada");
          cartaUm = null;
          cartaDois = null;}, 1500);
      }
    }
  }
  
  setInterval(() => {
    if (document.querySelectorAll(".card:not(.virada)").length === 0) {
      alert(`Você ganhou em ${cliques} cliques!`);
      lista.innerHTML = "";
    
    }
  }, 1000);