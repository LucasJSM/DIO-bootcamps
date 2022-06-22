class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  };

  /* a função é 'saldo', mas a propriedade é _saldo */
  get saldo() {
    return this._saldo;
  };

  set saldo(valor) {
    this._saldo = valor;
  };

  sacar(valor) {
    if(valor > this._saldo) {
      return `Operação negada`;
    };

    this._saldo = this._saldo - valor;

    return this._saldo;
  };

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  };

};

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "Corrente";
    this._cartaoCredito = cartaoCredito;
  };

  get cartaoCredito() {
    return this._cartaoCredito;
  };

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  };

};

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Poupança";
  };
};

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Universitária";
  };

  sacar(valor) {
    return valor > 500 ? `Operação negada` : this._saldo = this._saldo - valor;
  };
  
};

const contaPoupancaFamilia = new ContaPoupanca(1, 1233);
  contaPoupancaFamilia.depositar(150000);
  contaPoupancaFamilia.sacar(12000);

const contaCorrenteMae = new ContaCorrente(1, 1233, true);
  contaCorrenteMae.depositar(12000);
  contaCorrenteMae.sacar(1000);

const contaUniversitariaFilho = new ContaUniversitaria(1, 1233);
  contaUniversitariaFilho.depositar(1000);