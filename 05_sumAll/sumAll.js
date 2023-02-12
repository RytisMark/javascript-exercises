const sumAll = function(numFrom, numTo) {
    if (!(Number.isInteger(numFrom) && Number.isInteger(numTo)) || (numFrom < 0 || numTo < 0)) return "ERROR";
    if (numFrom > numTo) {
        let temp = numTo;
        numTo = numFrom;
        numFrom = temp;
    }
    
    let sum = 0;
    while(numFrom <= numTo) {
        sum += numFrom;
        numFrom++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
