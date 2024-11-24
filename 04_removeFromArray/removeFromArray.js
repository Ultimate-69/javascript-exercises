const removeFromArray = function(array, ...args) {
    let arrayToReturn = [];
    array.forEach((value) => {
        if (!args.includes(value)) {
            arrayToReturn.push(value);
        }
    });

    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
