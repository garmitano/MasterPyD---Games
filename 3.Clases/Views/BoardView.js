import { console } from "../Utils/console.js";
import { Board } from "../Models/Board.js";

export class BoardView {
   #board;

   constructor() {
      this.#board = new Board();
   }

   showTitle() {
      console.writeln("-------Mastermind-------");
   }
}
