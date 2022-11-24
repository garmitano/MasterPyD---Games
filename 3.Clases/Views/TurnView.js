import { console } from "../Utils/console.js";
import { GameMode } from "../Utils/GameMode.js";

import { Turn } from "../Models/Turn.js";
import { HumanPlayerView, RandomPlayerView } from "./PlayerView.js";

class TurnView {
   #turn;
   #numPlayers;
   #boarView;
   #activePlayerView;

   constructor(boardView) {
      this.#boarView = boardView;
      this.#numPlayers = new GameMode().read();
   }

   interact() {
      console.writeln(`jugamos con ${this.#numPlayers}`);
      // if (this.#numPlayers == 0) {
      //    console.writeln("Demo");
      //    this.#turn.getActivePlayer().accept(this);
      // } else if (this.#numPlayers == 1) {
      //    console.writeln("Human vs Machine");
      //    this.#turn.getActivePlayer().accept(this);
      // } else {
      //    console.writeln("Human vs Human");
      // }
   }

   visitHumanPlayer(humanPlayer) {
      this.#activePlayerView = new HumanPlayerView(humanPlayer);
   }
   visitRandomPlayer(randomPlayer) {
      this.#activePlayerView = new RandomPlayerView(randomPlayer);
   }
}

export { TurnView };
