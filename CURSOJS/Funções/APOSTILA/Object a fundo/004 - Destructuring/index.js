const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123123125,
    n: 5,
    link: {a: "a", b: { c: "C = c"}}
};

// const { tamanho, estoque, marcas = "Não possui marca" } = Tenis;
// console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: avaliacoes } = Tenis;
//console.log (secret);
console.log (randomNumber);
console.log (avaliacoes);

// const {
//     link: {
//         a,
//         b: { c }, 
//     },
//     } = Tenis;

// console.log (a);


console.log (Tenis.link.a, Tenis.link.b.c);