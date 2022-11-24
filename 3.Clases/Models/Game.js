import { console } from "../Utils/console.js";

class Game {
   #MAX_ATTEMPS = 10;
   #propousalsCombinations = [];

   constructor() {
      console.writeln(`Dentro de Game ${this.#MAX_ATTEMPS}`);
   }

   //    addPropouseCombination (propousalCombination) {
   //       propousalsCombinations.push(propousalCombination);
   //    }
   //    getResult (propousalCombination) {
   //       result = [];
   //       [...secretCombination].forEach((element, index) => {
   //          if ([...propousalCombination].indexOf(element) === index) {
   //             result.push("b");
   //          } else if (propousalCombination.includes(element)) {
   //             result.push("w");
   //          } else {
   //             result.push(" ");
   //          }
   //       });

   //    }
   //    isLoser () {
   //       return this.getAttemps() === MAX_ATTEMPS ? true : false;
   //    }
   //    isWinner () {
   //       return result.every((element) => element === "b");
   //    }
   //    finished () {
   //       return this.isLoser() || this.isWinner();
   //    }
   //    getAttemps () {
   //       return propousalsCombinations.length;
   //    }
   //    getMaxAttemps () {
   //       return MAX_ATTEMPS;
   //    }
   //    getPropousalsCombinations () {
   //       return propousalsCombinations;
   //    }
   // };

   isFinished() {
      return true;
   }
}

export { Game };
