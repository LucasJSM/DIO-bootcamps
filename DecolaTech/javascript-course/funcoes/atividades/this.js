function calculaIdade(anos) {
  return console.log(`Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} de idade`);
}

const professores = [
  { nome: 'Paulo', idade: 41 },
  { nome: 'Luana', idade: 26 },
  { nome: 'Natan', idade: 56 },
];

for(let i = 0; i < professores.length; i++) {
  calculaIdade.call(professores[i], 20);
};

console.log("");

for(let i = 0; i < professores.length; i++) {
  calculaIdade.apply(professores[i], [ 15 ]);
};