const palindromes = function (str) {
    const cleanString = str
        .toLowerCase()
        .split("") 
        .filter(char => 
            (char != char.toUpperCase()) || 
            (isFinite(char) && char != " " && char != "")
        ) // include only if char is a letter or number
        .join(""); 

    const reversedString = cleanString.split("").reverse().join("");

    return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
