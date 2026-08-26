const btnMenu = document.getElementById("btn-menu");
const btnFechar = document.getElementById("btn-fechar");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("aberto");
});

btnFechar.addEventListener("click", () => {
  menu.classList.remove("aberto");
});

const alimento = {
  nome: "Banana",
  descricao: "Fruta rica em fibras e potássio.",
  imagem: "imagens/banana.jpg",
  calorias: "89 kcal",
  carboidratos: "22,8 g",
  proteinas: "1,1 g",
  gorduras: "0,3 g",
  fibras: "2,6 g",
};

document.getElementById("nome-produto").textContent = alimento.nome;

document.getElementById("descricao-produto").textContent = alimento.descricao;

document.getElementById("calorias").textContent = alimento.calorias;

document.getElementById("carboidratos").textContent = alimento.carboidratos;

document.getElementById("proteinas").textContent = alimento.proteinas;

document.getElementById("imagem-produto").src = alimento.imagem;