const removeFromArray = function(arr, ...whatToRemove) {
    for (const val of whatToRemove){
        var i = 0;
        while (i < arr.length) {
            if (arr[i] === val) {
                arr.splice(i, 1);
                } else {
                ++i;
                }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
