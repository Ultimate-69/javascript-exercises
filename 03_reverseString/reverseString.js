const reverseString = function(stringText) {

    let reversedText = ''

    for (i = stringText.length - 1; i >= 0; i--) {
        reversedText += stringText[i];
    }

    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
