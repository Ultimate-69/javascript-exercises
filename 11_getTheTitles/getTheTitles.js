const getTheTitles = function(array) {
    let newArray = [];
    array.forEach((value) => {
        newArray.push(value.title);
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
