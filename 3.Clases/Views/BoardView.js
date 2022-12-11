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
      console.writeln(
         `Intento ${this.#board.getAttemps()} | ${this.#board.getCurrentPropousalCombination()} | ${this.#board.getResult()}`
      );
   }
   showResult() {
      console.writeln(`\n-------TERMINO-------\n`);
      if (this.#board.isWinner()) {
         console.writeln(`\n--------GANO--------\n`);
      } else {
         console.writeln(`\n--------PERDIO--------\n`);
      }
   }
}

export { BoardView };
