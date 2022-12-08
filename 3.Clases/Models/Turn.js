import { RandomPlayerView, HumanPlayerView } from "../Views/PlayerView.js";
import { HumanPlayer, RandomPlayer } from "./Player.js";

class Turn {
   #players;
   constructor() {
      this.#players = [];
   }

   reset(userPlayers) {
      if (userPlayers === 0) {
         new RandomPlayerView().getSecretCombination();
         this.#players[1] = new RandomPlayer();
      } else if (userPlayers === 1) {
         new RandomPlayerView().getSecretCombination();
         this.#players[1] = new HumanPlayer();
      } else {
         new HumanPlayerView().getSecretCombination();
         this.#players[1] = new HumanPlayer();
      }
   }

   getPlayers() {
      return this.#players;
   }
   getActivePlayer() {
      return this.#players[1];
   }
}

export { Turn };
