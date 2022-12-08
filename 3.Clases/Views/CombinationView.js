import { console } from "../Utils/console.js";
import { Message } from "./Message.js";
import { Combination } from "../Models/Combination.js";

class CombinationView {
   constructor() {}

   readCombination(message) {
      let tmpCombination = "";
      do {
         tmpCombination = console.readString(message);
         if (!this.hasValidLengh(tmpCombination)) {
            console.writeln("Debe ingresar una combinacion de 4 colores\n");
         } else if (!this.hasValidColors(tmpCombination)) {
            console.writeln("Debe ingresar colores correctos");
         } else if (this.hasRepeatedColors(tmpCombination)) {
            console.writeln("Al menos un color esta repetido.\n");
         }
      } while (this.isNotValid(tmpCombination));
      return tmpCombination;
   }

   getRandomCombination() {
      let color = "";
      let count = 0;
      let tmpCombination = "";
      do {
         color = Combination.POSIBLE_COLORS[parseInt(Math.random() * 6)];
         if (!tmpCombination.includes(color)) {
            tmpCombination += color;
            count++;
         }
      } while (count < Combination.COMBINATION_LENGTH + 1);
      return tmpCombination;
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
export { CombinationView };
