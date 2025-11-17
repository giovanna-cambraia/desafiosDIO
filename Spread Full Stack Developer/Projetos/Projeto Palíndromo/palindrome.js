function verifyPalindrome(string) {
    if(!string) return "String inválida";

    string.split('').reverse().join('') === string;
}

console.log(verifyPalindrome('arara')); 

// solução 2

function verifyPalindrome2(string) {
    if(!string) return "String inválida";

    for(let i = 0; i <string.length / 2; i++) {
        if (string[i] !== string.length - 1 - i) {
            return false;
        }
    }

    return true;
}

console.log(verifyPalindrome2('abba'));