var soma = 0;
for(var i=2; i<=process.argv.length-1; i++)
	soma=soma+number(process.argv[i]);
console.log('soma=' + soma);