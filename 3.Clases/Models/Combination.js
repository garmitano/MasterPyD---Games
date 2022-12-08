class Combination {
   static COMBINATION_LENGTH = 4;
   static POSIBLE_COLORS = "rgbypw";
   static NAME_COLORS = ["Red", "Green", "Blue", "Yellow", "Pink", "White"];
   static MAX_ATTEMPS = 10;
   propousalsCombinations = [];
   secretCombination = "";

   constructor() {}

   setSecretCombination(combination) {
      this.secretCombination = combination;
   }

   addPropousalCombination(propousalCombination) {
      this.propousalsCombinations.push(propousalCombination);
   }

   getResult() {
      let propousalCombination =
         this.propousalsCombinations[this.propousalsCombinations.length - 1];
      let result = [];
      [...this.secretCombination].forEach((element, index) => {
         if ([...propousalCombination].indexOf(element) === index) {
            result.push("b");
         } else if (propousalCombination.includes(element)) {
            result.push("w");
         } else {
            result.push(" ");
         }
      });
      return result;
   }

   isLoser() {
      return this.getAttemps() === this.MAX_ATTEMPS ? true : false;
   }
   isWinner() {
      return getResult().every((element) => element === "b");
   }
   isFinished() {
      return this.isLoser() || this.isWinner();
   }
   getAttemps() {
      return this.propousalsCombinations.length;
   }
}

export { Combination };
