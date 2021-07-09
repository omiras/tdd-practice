const {encryptNum} = require('./censurator');

test('Si el prefijo no es el adecuado (+39, 0039, 1 ), tenemos que devolver false', ()=> {
    const resultado = encryptNum('+35-211-458-7851');
    expect(resultado).toBe(false);
    const resultado2 = encryptNum('11-211-458-7851');
    expect(resultado2).toBe(false);
})

test('Censuramos correctamente los últimos dígitos de un número italiano +39 328 6587120', ()=> {
    const resultado = encryptNum('+39 328 6587120');
    expect(resultado).toBe('+39 328 6XXXXXX');
})

test('Censuramos correctamente los últimos dígitos de un número americano 1-212-420-0202', ()=> {
    const resultado = encryptNum('1-212-420-0202');
    expect(resultado).toBe('1-212-4XX-XXXX');
})