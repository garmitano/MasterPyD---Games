import { YesNoDialog } from "../Utils/YesNoDialog.js";
import { BoardView } from "./BoardView.js";
import { Board } from "../Models/Board.js";
import { TurnView } from "./TurnView.js";
import { Turn } from "../Models/Turn.js";

class GameView {
   #board;
   #boardView;
   #turn;
   #turnView;

   constructor() {
      this.#board = new Board();
      this.#turn = new Turn(this.#board);
      this.#boardView = new BoardView(this.#board);
      this.#turnView = new TurnView(this.#turn);
   }

   playGames() {
      do {
         this.playGame();
      } while (this.isResumed());
   }

   playGame() {
      this.#board.reset();
      this.#boardView.showTitle();
      this.#turnView.readPlayers();
      do {
         this.#turnView.interact();
      } while (!this.#board.isFinished());
      this.#boardView.showResult();
   }

   isResumed() {
      let isContinued = new YesNoDialog();
      return isContinued.isAfirmative();
   }
}
export { GameView };
