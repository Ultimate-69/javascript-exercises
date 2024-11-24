const findTheOldest = function(array) {
    maxAge = 0;
    selectedIndex = 0;
    array.forEach((value, index) => {
        if (value.yearOfDeath != undefined) {
            age = value.yearOfDeath - value.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                selectedIndex = index;
            }
        }
        else {
            let today = new Date()
            today = today.getFullYear();
            age = today - value.yearOfBirth;
            if (age > maxAge) {
                maxAge = age;
                selectedIndex = index;
            }
        }
    })
    return array[selectedIndex];
};

findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])

// Do not edit below this line
module.exports = findTheOldest;
