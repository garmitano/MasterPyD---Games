import { console } from "../Utils/console.js";
import { GameMode } from "../Utils/GameMode.js";
import { Turn } from "../Models/Turn.js";
import { HumanPlayer, RandomPlayer } from "./Player.js";
import { SecretCombination } from "../Models/Combination.js";
import { CombinationView } from "./CombinationView.js";
import { Message } from "./Message.js";

class TurnView {
   #turn;
   #numPlayers;
   #boarView;
   #activePlayer;
   #secretPlayer;
   #propousalPlayer;

   constructor(boardView) {
      this.#turn = new Turn();
      this.#boarView = boardView;
      this.#numPlayers = new GameMode().read();
      this.initPlayers();
   }

   initPlayers() {
      if (this.#numPlayers === 0) {
         this.#secretPlayer = new RandomPlayer();
         this.#propousalPlayer = new RandomPlayer();
      } else if (this.#numPlayers === 1) {
         this.#secretPlayer = new RandomPlayer();
         this.#propousalPlayer = new HumanPlayer();
      } else {
         this.#secretPlayer = new HumanPlayer();
         this.#propousalPlayer = new HumanPlayer();
      }
   }

   getSecretCombination() {
      new SecretCombination(this.#secretPlayer);
   }
   interact() {
      new CombinationView().getCombination(Message.PROPOUSAL_PLAYER);
   }
}

export { TurnView };
