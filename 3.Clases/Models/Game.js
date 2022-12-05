import { console } from "../Utils/console.js";
import { PropousalCombination } from "../Models/Combination.js";

class Game {
   #MAX_ATTEMPS = 10;
   #propousalCombination;

   constructor() {
      this.#propousalCombination = new PropousalCombination();
   }

   isLoser() {
      return this.getAttemps() === this.#MAX_ATTEMPS ? true : false;
   }
   isWinner() {
      console.writeln(`result ${this.#propousalCombination.getResult()}`);
      return this.#propousalCombination
         .getResult()
         .every((element) => element === "b");
   }
   isFinished() {
      console.writeln(`${this.isLoser()} + ${this.isWinner()}`);
      return this.isLoser() || this.isWinner();
   }
   getAttemps() {
      return this.#propousalCombination.getNumPropousalsCombinations();
   }
   getMaxAttemps() {
      return this.#MAX_ATTEMPS;
   }
}

export { Game };
