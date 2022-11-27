import { console } from "../Utils/console.js";
import { PropousalCombination } from "../Models/Combination.js";
import { Message } from "./Message.js";

class CombinationView {
   #propousalCombination;
   constructor() {
      this.#propousalCombination = new PropousalCombination();
      console.writeln(`Dentro de CombinationView`);
      this.getPropousalCombination();
   }

   getCombination(message) {
      let propousalCombination = "";
      do {
         propousalCombination = console.readString(message);
         if (!this.#propousalCombination.hasValidLengh(propousalCombination)) {
            console.writeln("Debe ingresar una combinacion de 4 colores\n");
         } else if (
            !this.#propousalCombination.hasValidColors(propousalCombination)
         ) {
            console.writeln("Debe ingresar colores correctos");
         } else if (
            this.#propousalCombination.hasRepeatedColors(propousalCombination)
         ) {
            console.writeln("Al menos un color esta repetido.\n");
         }
      } while (this.#propousalCombination.isNotValid(propousalCombination));
      return propousalCombination;
   }
}

export { CombinationView };
