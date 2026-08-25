let contador = 0;


function gerarCodigo() {
  contador++;

  return `sd${String(contador).padStart(6, "0")}`

}






// Aqui a gente cria uma lista (array) de produtos.
// Cada produto é um objeto com nome e informações nutricionais.
const produtos = [
 
];


produtos.push({
  codigo: gerarCodigo(),
  nome: "Abacaxi",
  calorias: 50,
  acucares: 9.5,
  carboidratos: 13.1,
  proteinas: 0.5,
  fibras: 1.4
});

produtos.push({
  codigo: gerarCodigo(),
  nome: "Banana",
  calorias: 89,
  acucares: 12.2,
  carboidratos: 22.8,
  proteinas: 1.1,
  fibras: 2.6,
});



console.log(produtos);
// Aqui pegamos o campo de texto onde o usuário digita o nome da fruta.
const campoPesquisa = document.getElementById("pesquisa");
// Aqui pegamos o botão que dispara a pesquisa.
const btnPesquisar = document.getElementById("btnPesquisar");

// Quando clicar no botão, esse bloco de código roda.
btnPesquisar.addEventListener("click", () => {
  // toLowerCase deixa tudo minúsculo para evitar erro por maiúscula/minúscula.
  const nomePesquisado = campoPesquisa.value.toLowerCase();
  // find procura o PRIMEIRO produto que bater com o nome digitado.
  const resultado = produtos.find(
    (produto) => produto.nome.toLowerCase() === nomePesquisado,
  );
  // Dica de aluno: use o console para enxergar o objeto retornado.
  console.log(resultado);

  // Pegamos no HTML a área onde os produtos vão aparecer na tela.
  const areaProduto = document.getElementById("produto");

  // Aqui não usamos +=, então o conteúdo antigo é substituído pelo novo resultado.
  areaProduto.innerHTML = `
    <div class="ficha">

      <h2>${resultado.nome}</h2>

      <div class="titulo-ficha">
        INFORMAÇÃO NUTRICIONAL
      </div>

      <p class="porcao">Porção: 100 g</p>

      <div class="linha destaque">
        <span>Valor energético</span>
        <strong>${resultado.calorias} kcal</strong>
      </div>

      <div class="linha">
        <span>Carboidratos</span>
        <strong>${resultado.carboidratos} g</strong>
      </div>

      <div class="linha">
        <span>Açúcares</span>
        <strong>${resultado.acucares} g</strong>
      </div>

      <div class="linha">
        <span>Proteínas</span>
        <strong>${resultado.proteinas} g</strong>
      </div>

      <div class="linha">
        <span>Fibras</span>
        <strong>${resultado.fibras} g</strong>
      </div>

    </div>
  `;
});