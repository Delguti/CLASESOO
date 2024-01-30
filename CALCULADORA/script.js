const calculadora = {
    numero1: 0,
    numero2: 0,
    resultado: 0,
    operacion: "",

    setNumero1(valor) {
        this.numero1 = parseFloat(valor);
    },

    setNumero2(valor) {
        this.numero2 = parseFloat(valor);
    },

    setResultado(valor) {
        this.resultado = valor;
    },

    getResultado() {
        return this.resultado.toFixed(2);
    },

    setOperacion(operacion) {
        this.operacion = operacion
    },

    realizarOperacion() {
        switch (this.operacion) {
            case 'suma':
                this.setResultado(this.numero1 + this.numero2);
                break;
            case 'resta':
                this.setResultado(this.numero1 - this.numero2);
                break;
            case 'multiplicacion':
                this.setResultado(this.numero1 * this.numero2);
                break;
            case 'division':
                this.setResultado(this.numero1 / this.numero2);
                    break;    
        }
    }
}

function realizarOperacion(operacion) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    calculadora.setNumero1(num1);
    calculadora.setNumero2(num2);
    calculadora.setOperacion(operacion);

    calculadora.realizarOperacion();
    document.getElementById('resultado').value = calculadora.getResultado();

}