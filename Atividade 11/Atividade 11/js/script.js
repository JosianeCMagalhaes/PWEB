function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    
    this.calcularArea = () =>{
        return this.base * this.altura;
    };
}

var retangulo = new Retangulo(1,3);
alert(retangulo.calcularArea());


function Conta(){
    var nomeCorrentista;
    var banco;
    var numeroConta;
    var saldo;

    this.setNomeCorrentista = (value)=>{
        this.nomeCorrentista = value;
    };

    this.getNomeCorrentista = ()=>{
        return this.nomeCorrentista;
    };

    this.setBanco = (value) =>{
        this.banco = value;
    }

    this.getBanco = ()=>{
        return this.banco;
    };

    this.setNumeroConta = (value) =>{
        this.numeroConta = value;
    };

    this.getNumeroConta = () =>{
        return this.numeroConta;
    };

    this.setSaldo = (value) =>{
        this.saldo = value;
    };

    this.getSaldo = () =>{
        return this.saldo;
    };
}

function Corrente(){
    var saldoEspecial;

    this.setSaldoEspecial = (value) => {
        this.saldoEspecial = value;
    };

    this.getSaldoEspecial = () => {
        return this.saldoEspecial;
    };
}

function Poupanca(){
    var juros;
    var dataVencimento;

    this.setJuros = (value) => {
        this.juros = value;
    };

    this.getJuros = () =>{
        return this.juros;
    };

    this.setDataVencimento = (value) =>{
        this.dataVencimento = value;
    };

    this.getDataVencimento = () =>{
        return this.dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("Izabela Machado");
contaCorrente.setBanco("Banco da Nação");
contaCorrente.setNumeroConta("111");
contaCorrente.setSaldo("R$ 1.000,00");
contaCorrente.setSaldoEspecial("R$ 500,00");

var contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Josiane Aparecida");
contaPoupanca.setBanco("Banco AVG");
contaPoupanca.setNumeroConta("222");
contaPoupanca.setSaldo("UR$ 200.00");
contaPoupanca.setDataVencimento("25/05/2022");
contaPoupanca.setJuros("1.25%");

alert("Conta Corrente:" + "\n"
    + contaCorrente.getNomeCorrentista() + "\n"
    + contaCorrente.getBanco() + "\n"
    + contaCorrente.getNumeroConta() + "\n"
    + contaCorrente.getSaldo() + "\n"
    + contaCorrente.getSaldoEspecial()
);

alert("Conta Poupança:" + "\n"
    + contaPoupanca.getNomeCorrentista() + "\n"
    + contaPoupanca.getBanco() + "\n"
    + contaPoupanca.getNumeroConta() + "\n"
    + contaPoupanca.getSaldo() + "\n"
    + contaPoupanca.getDataVencimento() + "\n"
    + contaPoupanca.getJuros()
);