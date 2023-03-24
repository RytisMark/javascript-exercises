const getTheTitles = function(arrayOfObjects) {
    arrayOfTitles = [];
    arrayOfObjects.forEach(obj => arrayOfTitles.push(obj.title));
    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
