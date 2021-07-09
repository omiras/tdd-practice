function esUnNumero(caracter) {
    const regexp = /\d/;

    return regexp.test(caracter);
}

exports.encryptNum = (number) => {
    //Code here, good luck!
    const regexp = /^(\+39|0039|1[-\s\.\d])/;
    const esValido = regexp.test(number);
    let resultado = "";

    if (!esValido) {
        return false;
    }

    let j = number.length - 1;
    let digitosCensurados = 0;

    while (j >= 0) {

        if (digitosCensurados != 6 && esUnNumero(number[j])) {
            resultado = 'X' + resultado;
            digitosCensurados++;
        }
        else {
            resultado = number[j] + resultado;
        }
        j--;
    }

    return resultado;
}
