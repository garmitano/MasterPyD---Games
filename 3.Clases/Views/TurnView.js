import { HumanPlayerView, RandomPlayerView } from "./PlayerView.js";
import { GameMode } from "../Utils/GameMode.js";
import { Turn } from "../Models/Turn.js";

class TurnView {
   #turn;
   #numPlayers;
   #activePlayerView;

   constructor() {
      this.#turn = new Turn();
      this.#numPlayers = new GameMode();
   }

   readPlayers() {
      let userPlayers = this.#numPlayers.read();
      this.#turn.reset(userPlayers);
   }

   interact() {
      this.#turn.getActivePlayer().accept(this);
      this.#activePlayerView.play();
   }

   visitHumanPlayer() {
      this.#activePlayerView = new HumanPlayerView();
   }
   visitRandomPlayer() {
      this.#activePlayerView = new RandomPlayerView();
   }
}

export { TurnView };
