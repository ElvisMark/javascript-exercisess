const repeatString = function(hey, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += hey;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
