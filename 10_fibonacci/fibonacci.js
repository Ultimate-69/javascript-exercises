const fibonacci = function(num) {
    let fibNum = 0;
    let otherNum = 1;

    if (num < 0) {
        return 'OOPS'
    }

    for (i = 0; i < num; i++) {
        let result = fibNum + otherNum;
        otherNum = fibNum
        fibNum = result;
    }

    return fibNum;
};

// Do not edit below this line
module.exports = fibonacci;
