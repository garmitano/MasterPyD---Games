import { console } from "../Utils/console.js";
import { PropousalCombination } from "../Models/Combination.js";
import { Message } from "./Message.js";

class CombinationView {
   #propousalCombination;
   #secretCombination = "";
   constructor() {
      this.#propousalCombination = new PropousalCombination();
   }

   readCombination(message) {
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
      console.writeln(propousalCombination);
      this.#propousalCombination.addPropouseCombination(propousalCombination);
      return this.#propousalCombination;
   }

   getRandomCombination() {
      let color = "";
      let count = 0;
      do {
         color = Combination.POSIBLE_COLORS[parseInt(Math.random() * 6)];
         console.writeln(`${color} - ${this.#secretCombination}`);
         if (!this.#secretCombination.includes(color)) {
            this.#secretCombination += color;
            count++;
         }
      } while (count < Combination.COMBINATION_LENGTH + 1);

      return this.#secretCombination;
   }
}

class SecretCombinationView extends CombinationView {
   constructor(player) {
      super();
   }
}

class PropousalCombinationView extends CombinationView {
   constructor(player) {
      super();
   }
}
export { SecretCombinationView, PropousalCombinationView };
