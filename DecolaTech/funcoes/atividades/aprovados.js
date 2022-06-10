function aprovados(alunos, media) {
  let alunosAprovados = [];

  for(let i = 0; i < alunos.length; i++) {
    if(alunos[i].notaFinal >= media) {
      alunosAprovados.push(alunos[i].name);
    };
  };

  return alunosAprovados;
};

let alunos = [
  { name: 'João', notaFinal: 8, turma: '1A' },
  { name: 'Maria', notaFinal: 5, turma: '2B' },
  { name: 'Marcos', notaFinal: 9, turma: '1C' },
  { name: 'Jonas', notaFinal: 6, turma: '1A' },
  { name: 'Paul', notaFinal: 9.5, turma:'2B' },
];

let media = 7;

const alunosAprovados = aprovados( alunos, media );
console.log(alunosAprovados);