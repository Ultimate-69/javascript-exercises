const palindromes = function (stringText) {
    stringText = stringText.replace(/,/g, '');
    stringText = stringText.replace(/ /g, '');
    stringText = stringText.replace(/\./g, '');
    stringText = stringText.replace(/!/g, '');

    let reversedText = ''

    for (i = stringText.length - 1; i >= 0; i--) {
        reversedText += stringText[i];
    }

    console.log(reversedText.toLowerCase());
    console.log(stringText.toLowerCase());
    return reversedText.toLowerCase() == stringText.toLowerCase();
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
