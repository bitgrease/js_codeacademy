let specimenNumbers = [];
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

createSpecimenNumber = () => {
  let randomNumber;
  // check specimenNumbers to make sure # is unique.
  do {
    randomNumber = Math.floor(Math.random() * 10000);
  } while (specimenNumbers.indexOf(randomNumber) !== -1);
  specimenNumbers.push(randomNumber);
  return randomNumber;
};

pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      const dnaBases = ["A", "T", "C", "G"];
      const idx = Math.floor(Math.random() * 15);
      const origBase = this.dna[idx];
      let mutatedBase;
      do {
        mutatedBase = dnaBases[Math.floor(Math.random() * 4)];
      } while (mutatedBase === origBase);
      this.dna[idx] = mutatedBase;
      return this.dna;
    },
    compareDNA(pAequor) {},
  };
};

const base = pAequorFactory(createSpecimenNumber(), mockUpStrand());
console.log(base);
base.mutate();
console.log(base);
