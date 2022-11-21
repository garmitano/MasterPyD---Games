import { console } from "../Utils/console.js";
import { HumanPlayer, RandomPlayer } from "./Player.js";

class Turn {
   static #NUM_PLAYERS = 2;
   #activePlayer;
   #players;
   constructor() {
      console.writeln(`Dentro de Turn`);
      this.#players = [];
      this.#activePlayer = 0;
   }

   reset() {
      this.#players[0] = new RandomPlayer();
      this.#players[1] = new HumanPlayer();
      this.#activePlayer = (this.#activePlayer + 1) % Turn.#NUM_PLAYERS;
   }

   getActivePlayer() {
      return this.#players[this.#activePlayer];
   }
}

export { Turn };
