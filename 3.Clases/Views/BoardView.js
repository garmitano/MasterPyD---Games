import { console } from "../Utils/console.js";
import { Board } from "../Models/Board.js";

class BoardView {
   #board;

   constructor() {
      this.#board = new Board();
   }

   showTitle() {
      console.writeln("\n-------Mastermind-------\n");
   }
   showIt() {
      console.writeln("\n-------asi estamos pais-------\n");
   }
   showResult() {
      console.writeln("\n-------TERMINO-------\n");
   }
}

export { BoardView };
