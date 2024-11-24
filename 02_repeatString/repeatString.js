const repeatString = function(text, amount) {
    textReturn = "";
    if (amount < 0) {
        return 'ERROR';
    }

    for (i = 0; i < amount; i++) {
        textReturn += text;
    }

    return textReturn
};

// Do not edit below this line
module.exports = repeatString;
