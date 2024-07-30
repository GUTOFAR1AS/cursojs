let Tenis = {
    tamanho: 45,
    estoque: true,
};

Tenis.tamanho = 42;
Tenis.estoque = false;
Tenis.preco = "R$ 42";
Tenis ["preço"] = "R$ 42";

console.log (Tenis);
console.log(Tenis["preço"]);
