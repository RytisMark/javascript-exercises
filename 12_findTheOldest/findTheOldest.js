const findTheOldest = function(arrayOfPeople) {
    arrayOfPeople = arrayOfPeople.sort((firstPerson, secondPerson) => {
        const ageFirst = findAge(firstPerson.yearOfDeath, firstPerson.yearOfBirth);
        const ageSecond = findAge(secondPerson.yearOfDeath, secondPerson.yearOfBirth);
        return (ageFirst > ageSecond ? -1 : 1);
    });

    return arrayOfPeople[0];
};

function findAge(death, birth) {
    if (!death) death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
