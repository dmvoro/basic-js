class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }
    encrypt(str, key) {
        if (typeof(str) === "undefined" || typeof(key) === "undefined") {
            throw new Error();
        }
            
        let letterA = 65;
        let alphabetSize = 26;
        let j = 0;
        let encryptedStr = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i].toUpperCase().charCodeAt(0) < 91 && str[i].toUpperCase().charCodeAt(0) > 64) {
                encryptedStr.push(String.fromCharCode(letterA + ((str[i].toUpperCase().charCodeAt(0) - letterA) + (key[j].toUpperCase().charCodeAt(0) - letterA)) % alphabetSize));
                j++;                    
            } else {
                encryptedStr.push(str[i].toUpperCase());
            }

            if (j == key.length) {
                j = 0;
            }
        }
        if (this.reverse === false) {
            return encryptedStr.reverse().join('');
            } else {
                return encryptedStr.join('');
            }
    }

    decrypt(str, key) {
        if (typeof(str) === "undefined" || typeof(key) === "undefined"){
            throw new Error();
        }
        
        let letterA = 65;
        let alphabetSize = 26;
        let j = 0;
        let decryptedStr = [];
        let symbol = 0

        for (let i = 0; i < str.length; i++) {
            if (str[i].toUpperCase().charCodeAt(0) < 91 && str[i].toUpperCase().charCodeAt(0) > 64) {
                symbol = str[i].toUpperCase().charCodeAt(0) - (key[j].toUpperCase().charCodeAt(0) - letterA);

                decryptedStr.push(String.fromCharCode(symbol + alphabetSize * Math.trunc((letterA - 1) / symbol)));
                j++;                    
            } else {
                decryptedStr.push(str[i].toUpperCase());
            }

            if (j == key.length) {
                j = 0;
            }
        }
        if (this.reverse === false) {
            return decryptedStr.reverse().join('');
            } else {
                return decryptedStr.join('');
            }
    }
}

module.exports = VigenereCipheringMachine;
