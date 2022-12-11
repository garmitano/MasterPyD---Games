import { HumanPlayer, RandomPlayer } from "./Player.js";

class Turn {
   static MAX_PLAYERS = 2;
   #players;
   #board;

   constructor(board) {
      this.#players = [];
      this.#board = board;
   }

   reset(numHumanPlayers) {
      if (numHumanPlayers === 0) {
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new RandomPlayer();
      } else if (numHumanPlayers === 1) {
         this.#players[0] = new RandomPlayer();
         this.#players[1] = new HumanPlayer();
      } else {
         this.#players[0] = new HumanPlayer();
         this.#players[1] = new HumanPlayer();
      }
   }
   setSecretCombination(combinacion) {
      this.#board.setSecretCombination(combinacion);
   }
   play(combination) {
      this.#board.addPropousalCombination(combination);
      return this.#board.getResult();
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
