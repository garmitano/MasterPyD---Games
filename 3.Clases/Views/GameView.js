import { YesNoDialog } from "../Utils/YesNoDialog.js";
import { BoardView } from "./BoardView.js";
import { Board } from "../Models/Board.js
import { TurnView } from "./TurnView.js";

class GameView {
   #board
   #boardView;
   #turnView;

   constructor() {
      this.#board = new Board()
      this.#boardView = new BoardView(this.#board);
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
      } while (!this.#board.getResult());
      this.#boardView.showResult();
   }

   isResumed() {
      let isContinued = new YesNoDialog();
      return isContinued.isAfirmative();
   }
}
export { GameView };
