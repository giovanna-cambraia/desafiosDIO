function compareNumbers(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números!'

    const firstPhrase = createFirstPhrase(num1, num2);
    const secondPhrase = createSecondPhrase(num1, num2);

    return `${firstPhrase} ${secondPhrase}`;
}

function createFirstPhrase(num1, num2) {
    let areEqual = '';

    if (num1 !== num2) {
        areEqual = 'não';
    }

    return `Os números ${num1} e ${num2} ${areEqual} são iguais.`;
}

function createSecondPhrase(num1, num2) {

    const addition = num1 + num2;
    let result10 = 'menor';
    let result20 = 'menor';
    const comparsion10 = soma > 10;
    const compparsion20 = soma > 20 

    if (compare10) {
        result10 = 'maior';
    }

    if (compare20) {
        result20 = 'maior';
    }

    return `Sua soma é ${addition}, que é ${result10} que 10 e ${result20} que 20.`;
}