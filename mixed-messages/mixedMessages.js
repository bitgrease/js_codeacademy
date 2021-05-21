const subjects = ['The bird', 'A rock', 'One man', 'One woman', 'A person'];
const verbs = ['eats', 'shot', 'perpetrated', 'garnered', 'shuttered'];
const objects = ['a frog', 'the car', 'babies', 'animals', 'vegetables', 'a radio'];

// Generate a random index for a given array
generateRandomIndex = array => {
    return Math.round(Math.random() * (array.length - 1))
};

console.log(`${subjects[generateRandomIndex(subjects)]} ${verbs[generateRandomIndex(verbs)]} ${objects[(generateRandomIndex(objects))]}`);