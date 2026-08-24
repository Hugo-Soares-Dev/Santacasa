const produtos = {
  nome: "Banana",
  calorias: 89,
  acucares: 12.2,
  carboidratos: 22.8,
  proteinas: 1.1,
  fibras: 2.6,
};

document.getElementById("produto").innerHTML = `
  <h3>${produtos.nome}</h3>
  <p>Calorias: ${produtos.calorias}</p>
  <p> Açúcares: ${produtos.acucares}g</p>
  <p>Carboidratos: ${produtos.carboidratos}g</p>
  <p>Proteínas: ${produtos.proteinas}g</p>
  <p>Fibras: ${produtos.fibras}g</p>
`;
        
console.log(produtos);
 // Output: Banana