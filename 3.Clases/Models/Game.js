import { console } from "../Utils/console.js";

export class Game {
   #MAX_ATTEMPS = 10;
   constructor() {
      console.writeln(`Dentro de Game ${this.#MAX_ATTEMPS}`);
   }

   isFinished() {
      return true;
   }
}
