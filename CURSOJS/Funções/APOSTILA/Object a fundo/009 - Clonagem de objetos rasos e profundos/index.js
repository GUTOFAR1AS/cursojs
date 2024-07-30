// Resumo
// Clonagem Rasa: Cria uma nova referência para o objeto de primeiro nível. Propriedades que são objetos ainda apontam para os mesmos locais.
// Clonagem Profunda: Cria uma cópia completa, incluindo todas as propriedades aninhadas e seus valores.




const original = {
    name: "Alice",
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    }
  };
  
  // Clonagem rasa usando Object.assign
  const clone = Object.assign({}, original);
  
  console.log(clone);
  // Saída: { name: 'Alice', age: 30, address: { city: 'Wonderland', zip: '12345' } }
  

  clone.address.city = "New City";

console.log(original.address.city);
// Saída: 'New City'



const deepClone = JSON.parse(JSON.stringify(original));


// Usando Bibliotecas
// Para casos mais complexos, você pode usar bibliotecas que facilitam a clonagem profunda, como o lodash:

// const _ = require('lodash');

// const deepClone = _.cloneDeep(original);

// Escolher entre clonagem rasa e profunda depende do contexto e das suas necessidades específicas. Se o objeto tem referências a outros objetos e você precisa que essas referências sejam independentes, uma clonagem profunda é o caminho a seguir.