import { console } from "../Utils/console.js";

class BoardView {
   #board;
   constructor(board) {
      this.#board = board;
   }

   showTitle() {
      console.writeln("\n-------Mastermind-------\n");
   }
   showIt() {
      console.writeln(`Result ${this.#board.getResult()}`);
   }
   showResult() {
      console.writeln("\n-------TERMINO-------\n");
   }
}

export { BoardView };
