// This: referência para o contexto
  // Em um objeto, o this referencia o próprio objeto
  const user = {
    id: 13,
    username: "Max",
    firstName: "Maxuel",
    lastName: "Androa",
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    getId: function () {
      return `${this.id}`;
    },
  };

  console.log(user.getFullName());
  console.log(user.getId());

  // Fora de uma função
    // Node
    console.log(this); // -> {}

    // Browser
    console.log(this); // -> window

  // Dentro de uma função
  (function() {
    console.log(this); // -> global
  })();

  // Em um evento, o this é o elemento que recebe o evento
  // <button class="btn" onclick="console.log(this)">Click</button>

// Manipulando o valor do this
  // Call: o this usa o objeto passado
    // Exemplo em objetos
    const pessoa = { name: 'Marcus' };
    const pet = { name: 'rui' };

    function getSomething() {
      return console.log(this.name);
    }

    getSomething.call(pessoa);
    getSomething.call(pet);

    // Exemplo com parâmetros na função
    const numbers = {
      num1: 102,
      num2: 1223,
    }

    function subtrair(a, b) {
      return console.log(`${this.num1 - this.num2 - a - b}`);
    }

    subtrair.call(numbers, 31, 329); // Os argumentos são separados por vírgulas

  // Aplly
    // Exemplo em objetos
    getSomething.apply(pessoa);
    getSomething.apply(pet);

    // Exemplo com parâmetros nas funções
    subtrair.apply(numbers, [ 31, 329 ] )

  // Bind: clona a estrutura da função e aplica o valor do objeto do parâmetro
  const returnName = function() {
    return console.log(this.name);
  }
  let bruno = returnName.bind( { name: 'Keveds' } );
  bruno(); // bruno se torna um função tendo obj como parametro