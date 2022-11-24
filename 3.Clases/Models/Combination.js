class Combination {
   static #COMBINATION_LENGTH = 4;
   static #POSIBLE_COLORS = "rgbypw";
   static #NAME_COLORS = ["Red", "Green", "Blue", "Yellow", "Pink", "White"];

   constructor() {}

   getPosibleColors() {
      return this.POSIBLE_COLORS;
   }
   getCombinationLength() {
      return this.COMBINATION_LENGTH;
   }
   getNameColors() {
      return this.NAME_COLORS;
   }
}

class SecretCombination extends Combination {
   #secretCombination;
   constructor() {
      super();
      this.#secretCombination = "";
   }

   getSecretCombination() {
      let color = "";
      let count = 0;
      do {
         color = Combination.POSIBLE_COLORS[parseInt(Math.random() * 6)];
         if (!this.#secretCombination.includes(color)) {
            this.#secretCombination += color;
            count++;
         }
      } while (count < this.getCombinationLength());
      console.writeln(this.#secretCombination);
      return this.#secretCombination;
   }
}

class PropousalCombination extends Combination {
   constructor() {
      super();
   }
   hasValidLengh(propousalCombination) {
      return propousalCombination.length === Combination.COMBINATION_LENGTH;
   }
   hasValidColors(propousalCombination) {
      const colors = Combination.POSIBLE_COLORS;
      const unionColors = new Set([...colors, ...propousalCombination]);
      return unionColors.size === 6 ? true : false;
   }
   hasRepeatedColors(propousalCombination) {
      let colors = [...propousalCombination];
      let count = 0;
      for (let i = 0; i < colors.length; i++) {
         for (let j = 0; j < colors.length; j++) {
            if (colors[i] === colors[j]) {
               count++;
            }
         }
      }
      return count > 4 ? true : false;
   }
   isNotValid(propousalCombination) {
      return this.hasRepeatedColors(propousalCombination);
   }
}

export { SecretCombination, PropousalCombination };
