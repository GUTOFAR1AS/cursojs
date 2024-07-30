/*
    1 - Nome da função
    2 - Retorno 
    3 - Não tem Hoisting 
    4 - Arguments 
*/
function nomedaFunc() {
    return "Dener";
}
console.log(nomedaFunc());

const nomedaFuncArrow = () => {
    return 'Dener'
}
console.log(nomedaFuncArrow());

// Não Funciona
//const nomedaFuncArrowReturn = () => "Dener";

//function nomedaFuncArguments() {
//    return arguments
//} 

const nomedaFuncParams = (param) => param;
//console.log(nomedaFuncArguments)
/*
5 - Não pode ser invocada com New
*/
class newFunc {
    constructor(nome){
        this.nome = nome;
        
    }
}

const a = new newFunc("Dener")

console.log(a.nome);
/*
6 - Contexto 
    Arrow Functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele esta vinculado 
    no momento da chamada

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automatica 
    como contexto o contexto global, que no caso dos navegadores é window
*/
const lanches = {
    cardapio: [{nome: "x-salada", preco: "R$ 25"},
                {nome: "x-bolovo", preco: "R$ 30"},
    ],

    meuPedidoFunc: function(select){
      return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function(){
        setTimeout(function () 
         {
            console.log(this.cardapio);
            console.log(this);
        }.bind (this), 
        1000
    );
        },
   meuPedidoArrowFunc: (select) => {
    this.cardapio = [
        {nome: "x-salada", preco: "R$ 25"},
        {nome: "x-bolovo", preco: "R$ 30"},
];
    return console.log (this.cardapio[select])
   },
};  

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();  
/* 
    7 - Constructor 
    Arrow functions não podem ser constructors, então não é possível usar o operador new com a mesma.
*/
// class newFunc {
   
// constructor(nome){
//         this.nome = nome;
        
//     }
// }

// const a = new newFunc("Dener")

// console.log(a.nome);

