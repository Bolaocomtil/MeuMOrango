const a = [
    { nome: "Morango do amor", aura: "∞", comia: "Sim", imagem: "./img/ChatGPT Image 4 de out. de 2025, 13_49_36.png" , link: "./infoMorango.html",card: "#bb0202ff", },
    { nome: "Pistache", aura: "∞", comia: "Sim", imagem: "./img/receitas-de-sorvete-de-pistache-07-730x449.jpg", link: "./infopistache.html", card: "#1ea10aff" },
    { nome: "Bobbie Goods", aura: "∞", comia: "Não", imagem: "./img/bob.jpg" , link: "./infobob.html" , card: "#ffb400ff" },
    { nome: "Labubu", aura: "∞", comia: "Não", imagem: "./img/labubu.jpg" , link: "./infolabubu.html", card: "#da0187ff" },
]


  
const cards = a.map(item => {
  return `
   <a href="${item.link}" style="text-decoration: none; color: inherit;">
    <div id="cards" class="card" style="background-color: ${item.card || '#F5F5F5'};">
        <img class="img" src="${item.imagem}" alt="${item.nome}">
    <div class="texto">
        <h3  class="nome">Nome:${item.nome} </h3>
        <h3 id="aura" class="aura">Aura:${item.aura}</h3>
        <h3 id="food" class="comia">comia:${item.comia}</h3>
        <h4 class="info">Clique em qualquer lugar do card para mais informações</h4>
        
    </div>
     </div>
    </a>
  `;
});
document.getElementById("c").innerHTML = cards.join("");