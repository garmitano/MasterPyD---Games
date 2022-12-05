import { Turn } from "../Models/Turn.js";
import { HumanPlayerView, RandomPlayerView } from "./PlayerView.js";
import { GameMode } from "../Utils/GameMode.js";
import { Message } from "./Message.js";

class TurnView {
   #turn;
   #numPlayers;

   constructor(boardView) {
      this.#turn = new Turn();
      this.#numPlayers = new GameMode();
   }

   readPlayers() {
      let userPlayers = this.#numPlayers.read();
      this.#turn.reset(userPlayers);
   }
   interact() {
      this.#turn.getActivePlayer().accept(this);
      this.#turn.next()
   }

   visitHumanPlayer(userPlayer) {
      new HumanPlayerView(userPlayer).interact();
   }
   visitRandomPlayer(userPlayer) {
      new RandomPlayerView(userPlayer).interact();
   }
}

export { TurnView };
