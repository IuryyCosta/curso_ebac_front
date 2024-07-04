const alunos = [
  { nome: 'João', nota: 8 },
  { nome: 'Maria', nota: 5 },
  { nome: 'Pedro', nota: 6.5 },
  { nome: 'Ana', nota: 4 },
  { nome: 'Carlos', nota: 7 },
];

// Passo 2: Criar uma função que filtra os alunos com nota maior ou igual a 6
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

// Exibindo os alunos aprovados
console.log('Alunos aprovados:');
console.log(alunosAprovados);
