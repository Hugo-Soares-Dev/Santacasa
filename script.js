// Aqui a gente cria uma lista (array) de produtos.
// Cada produto é um objeto com nome e informações nutricionais.
const produtos = [
  {
    nome: "Banana",
    calorias: 89,
    acucares: 12.2,
    carboidratos: 22.8,
    proteinas: 1.1,
    fibras: 2.6,
  },

  {
    nome: "Maçã",
    calorias: 52,
    acucares: 10.4,
    carboidratos: 13.8,
    proteinas: 0.3,
    fibras: 2.4,
  },

  {
    nome: "Laranja",
    calorias: 47,
    acucares: 9.4,
    carboidratos: 11.8,
    proteinas: 0.9,
    fibras: 2.4,
  },
];

// Aqui pegamos o campo de texto onde o usuário digita o nome da fruta.
const campoPesquisa = document.getElementById("pesquisa");
// Aqui pegamos o botão que dispara a pesquisa.
const btnPesquisar = document.getElementById("btnPesquisar");

// Quando clicar no botão, esse bloco de código roda.
btnPesquisar.addEventListener("click",() => {
  // toLowerCase deixa tudo minúsculo para evitar erro por maiúscula/minúscula.
  const nomePesquisado = campoPesquisa.value.toLowerCase();
  // find procura o PRIMEIRO produto que bater com o nome digitado.
  const resultado = produtos.find(
    produto => produto.nome.toLowerCase() === nomePesquisado
  );
  // Dica de aluno: use o console para enxergar o objeto retornado.
  console.log(resultado);
  
  // Pegamos no HTML a área onde os produtos vão aparecer na tela.
  const areaProduto = document.getElementById("produto");
  
  // Aqui não usamos +=, então o conteúdo antigo é substituído pelo novo resultado.
  areaProduto.innerHTML = `
  <h3>${resultado.nome}</h3>
  <p>Calorias: ${resultado.calorias} kcal</p>
  <p>Açúcares: ${resultado.acucares} g</p>
  <p>Carboidratos: ${resultado.carboidratos} g</p>
  <p>Proteínas: ${resultado.proteinas} g</p>
  <p>Fibras: ${resultado.fibras} g</p>
  `;
  });
