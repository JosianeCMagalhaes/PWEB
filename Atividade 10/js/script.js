var Aluno1 = {
  ra: '0030482013014',
  nome: 'Romildo Show'
}
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1.ra = '0030481911919';
Aluno1.nome = 'Gabriel de Almeida Barros';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1['ra'] = '0030481911010';
Aluno1['nome'] = 'Adalberto Rangel Gomes';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);