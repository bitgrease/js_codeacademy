const subjects = [];
const verbs = [];
const objects = [];

// Generate a random index for a given array
generateRandomIndex = array => {
    return Math.round(Math.random() * (array.length - 1))
}

for(let i = 0;i < 11;i++) {
    console.log(generateRandomIndex([0,1,2,3,4,5,6,7,8,9]))
};