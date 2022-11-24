import { console } from "./console.js";
import { ClosedInterval } from "./CloseInterval.js";

class GameMode {
   #numPlayers;
   #possibleModes;
   #MIN = 0;
   #MAX = 2;

   constructor() {
      this.#possibleModes = new ClosedInterval(this.#MIN, this.#MAX);
   }

   read() {
      let error = false;
      console.writeln(
         "(0)- Demo\n(1)- Human vs Machine\n(2)- Human vs Human\n"
      );
      do {
         this.#numPlayers = console.readNumber("Elija modo de juego: ");
         error = !this.#possibleModes.isIncluded(this.#numPlayers);
         if (error) {
            console.writeln(`Valores posibles (0-1-2)${error}`);
         }
      } while (error);
      return this.#numPlayers;
   }
}

export { GameMode };
