import { YesNoDialog } from "../Utils/YesNoDialog.js";
import { BoardView } from "./BoardView.js";
import { TurnView } from "./TurnView.js";

class GameView {
   #game;
   #numPlayers;
   #boardView;
   #turnView;

   constructor(game) {
      this.#game = game;
      this.#boardView = new BoardView();
      this.#turnView = new TurnView();
   }

   playGames() {
      do {
         this.playGame();
      } while (this.isResumed());
   }

   playGame() {
      this.#boardView.showTitle();
      this.#turnView.readPlayers();
      do {
         this.#turnView.interact();
         this.#boardView.showIt();
      } while (!this.#game.isFinished());
      this.#boardView.showResult();
   }

   isResumed() {
      let isContinued = new YesNoDialog();
      return isContinued.isAfirmative();
   }
}
export { GameView };
