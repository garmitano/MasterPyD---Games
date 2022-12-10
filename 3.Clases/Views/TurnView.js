import { HumanPlayerView, RandomPlayerView } from "./PlayerView.js";
import { GameMode } from "../Utils/GameMode.js";
import { Message } from "./Message.js";

class TurnView {
   #gameMode;
   #activePlayerView;
   #turn;

   constructor(turn) {
      this.#turn = turn;
      this.#gameMode = new GameMode();
   }

   readPlayers() {
      let numHumanPlayers = this.#gameMode.read();
      this.#turn.reset(numHumanPlayers);
      this.#turn.getSecretPlayer().acceptSecret(this);
   }

   interact() {
      this.#turn.getActivePlayer().accept(this);

      this.#turn.play(this.#activePlayerView.readCombination());
   }

   visitHumanPlayer(player) {
      this.#activePlayerView = new HumanPlayerView(Message.PROPOUSAL_PLAYER);
   }
   visitRandomPlayer(player) {
      this.#activePlayerView = new RandomPlayerView(Message.PROPOUSAL_PLAYER);
   }
   visitHumanSecretPlayer(player) {
      this.#activePlayerView = new HumanPlayerView(Message.SECRET_PLAYER);
   }
   visitRandomSecretPlayer(player) {
      this.#activePlayerView = new RandomPlayerView(Message.SECRET_PLAYER);
   }
}

export { TurnView };
