const findTheOldest = function(people) {
    if (people.length === 0) return {};

    return people.reduce((oldest, current) => {
        oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        currentAge = getAge(current.yearOfDeath, current.yearOfBirth); 
        
        return (oldestAge > currentAge) ? oldest : current;
    });


    function getAge(yearOfDeath, yearOfBirth) {
        return (yearOfDeath ?? new Date().getFullYear()) - yearOfBirth;    
    }
};

// Do not edit below this line
module.exports = findTheOldest;
