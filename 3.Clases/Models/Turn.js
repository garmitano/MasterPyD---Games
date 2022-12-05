import { console } from "../Utils/console.js";
import { RandomPlayerView, HumanPlayerView } from "../Views/PlayerView.js";
import { Game } from "./Game.js";
import { HumanPlayer, RandomPlayer } from "./Player.js";

class Turn {
   #players;
   constructor() {
      this.#players = [];
   }

   reset(userPlayers) {
      if (userPlayers === 0) {
         let player = new RandomPlayerView();
         Game.secretCombination = player.getSecretCombination();
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new RandomPlayer();
      } else if (userPlayers === 1) {
         let player = new RandomPlayerView();
         Game.secretCombination = player.getSecretCombination();
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new HumanPlayer();
      } else {
         let player = new HumanPlayerView();
         Game.secretCombination = player.getSecretCombination();
         this.#players[0] = new HumanPlayer();
         this.#players[1] = new HumanPlayer();
      }
   }

   getPlayers() {
      return this.#players;
   }
   getSecretPlayer() {
      return this.#players[0];
   }
   getActivePlayer() {
      return this.#players[1];
   }
}

export { Turn };
