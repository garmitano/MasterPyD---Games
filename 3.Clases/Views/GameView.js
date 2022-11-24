import { YesNoDialog } from "../Utils/YesNoDialog.js";
import { BoardView } from "./BoardView.js";
import { TurnView } from "./TurnView.js";

class GameView {
   #boardView;
   #turnView;
   #game;

   constructor(game) {
      this.#game = game;
      this.#boardView = new BoardView();
      this.#turnView = new TurnView(this.#boardView);
   }

   playGames() {
      do {
         this.playGame();
      } while (this.isResumed());
   }

   playGame() {
      this.#boardView.showTitle();
      do {
         this.#turnView.interact();
      } while (!this.#game.isFinished());
   }

   isResumed() {
      let isContinued = new YesNoDialog();
      return isContinued.isAfirmative();
   }
}
export { GameView };
