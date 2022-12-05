import { HumanPlayer, RandomPlayer } from "../Models/Player.js";
import { Message } from "../Views/Message.js";
import { console } from "../Utils/console.js";

class Combination {
   static COMBINATION_LENGTH = 4;
   static POSIBLE_COLORS = "rgbypw";
   static NAME_COLORS = ["Red", "Green", "Blue", "Yellow", "Pink", "White"];

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

   getCombination() {}
}

class SecretCombination extends Combination {
   constructor() {
      super();
   }
}

class PropousalCombination extends Combination {
   propousalsCombinations = [];
   constructor() {
      super();
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
   getNumPropousalsCombinations() {
      return this.propousalsCombinations.length;
   }
}

export { SecretCombination, PropousalCombination };
