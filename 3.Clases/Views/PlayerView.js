import { console } from "../Utils/console.js";
import { Board } from "../Models/Board.js";

class PlayerView {
   message;
   constructor(message) {
      this.message = message;
   }
}

class HumanPlayerView extends PlayerView {
   constructor(message) {
      super(message);
   }

   readCombination() {
      let tmpCombination = "";
      do {
         tmpCombination = console.readString(this.message);
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
   hasValidLengh(propousalCombination) {
      return propousalCombination.length === Board.COMBINATION_LENGTH;
   }
   hasValidColors(propousalCombination) {
      const colors = Board.POSIBLE_COLORS;
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

class RandomPlayerView extends PlayerView {
   constructor() {
      super();
   }
   readCombination() {
      let color = "";
      let count = 0;
      let tmpCombination = "";
      do {
         color = Board.POSIBLE_COLORS[parseInt(Math.random() * 6)];
         if (!tmpCombination.includes(color)) {
            tmpCombination += color;
            count++;
         }
      } while (count < Board.COMBINATION_LENGTH);

      return tmpCombination;
   }
}

export { HumanPlayerView, RandomPlayerView };
