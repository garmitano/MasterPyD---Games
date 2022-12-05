import { Turn } from "../Models/Turn.js";
import { HumanPlayerView, RandomPlayerView } from "./PlayerView.js";
import { GameMode } from "../Utils/GameMode.js";

class TurnView {
   #turn;
   #numPlayers;

   constructor() {
      this.#turn = new Turn();
      this.#numPlayers = new GameMode();
   }

   readPlayers() {
      let userPlayers = this.#numPlayers.read();
      this.#turn.reset(userPlayers);
   }
   // getSecretCombination() {
   //    this.#turn.getSecretPlayer().accept(this);
   // }
   interact() {
      this.#turn.getActivePlayer().accept(this);
   }

   visitHumanPlayer(userPlayer) {
      new HumanPlayerView(userPlayer).interact();
   }
   visitRandomPlayer(userPlayer) {
      new RandomPlayerView(userPlayer).interact();
   }
}

export { TurnView };
