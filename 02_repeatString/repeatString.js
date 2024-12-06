const repeatString = function(str, numRepetitions) {
    if (numRepetitions < 0) {
        return "ERROR";
    }

    let repeatedStr = "";
    for (let i = 0; i < numRepetitions; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
