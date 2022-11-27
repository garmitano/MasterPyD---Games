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

   reset() {}

   getPlayers() {
      return this.#players[this.#activePlayer];
   }
}

export { Turn };
