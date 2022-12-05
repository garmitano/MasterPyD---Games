import { console } from "../Utils/console.js";
import { HumanPlayer, RandomPlayer } from "./Player.js";

class Turn {
   static #NUM_PLAYERS = 2;
   #activePlayer;
   #players;
   constructor() {
      this.#players = [];
      this.#activePlayer = 0;
   }

   reset(userPlayers) {
      if (userPlayers === 0) {
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new RandomPlayer();
      } else if (userPlayers === 1) {
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new HumanPlayer();
      } else {
         this.#players[0] = new HumanPlayer();
         this.#players[1] = new HumanPlayer();
      }
      
   }

   getPlayers() {
      return this.#players;
   }
   getActivePlayer() {
      return this.#players[this.#activePlayer];
   }
   next() {
      return (this.#activePlayer = 1);
   }
}

export { Turn };
