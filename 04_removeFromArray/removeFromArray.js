const removeFromArray = function(arr, ...toBeDeleted) {
    return arr.filter( elem => !toBeDeleted.includes(elem) )
};

// Do not edit below this line
module.exports = removeFromArray;
