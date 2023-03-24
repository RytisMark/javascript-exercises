const fibonacci = function(index) {
    let fibSeq = [1, 1];
    index = parseInt(index);
    
    if (index < 0) return "OOPS";

    for (let i = 2; i < index; i++) {
        fibSeq[i] = fibSeq[i - 2] + fibSeq[i - 1];
    }
    return fibSeq[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
