import { YesNoDialog } from "../Utils/YesNoDialog.js";
import { BoardView } from "./BoardView.js";
import { TurnView } from "./TurnView.js";

export class GameView {
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
      let numPlayers = this.#turnView.askModeGame();
      do {
         this.#turnView.interact(numPlayers);
      } while (!this.#game.isFinished());
   }

   isResumed() {
      let isContinued = new YesNoDialog();
      return isContinued.isAfirmative();
   }
}
