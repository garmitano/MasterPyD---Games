import { console } from "../Utils/console.js";

class BoardView {
   #combination;
   constructor(combination) {
      this.#combination = combination;
   }

   showTitle() {
      console.writeln("\n-------Mastermind-------\n");
   }
   showIt() {
      console.writeln(`Result ${Combination.getResult()}`);
   }
   showResult() {
      console.writeln("\n-------TERMINO-------\n");
   }
}

export { BoardView };
