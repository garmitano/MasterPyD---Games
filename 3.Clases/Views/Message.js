import { console } from "../Utils/console.js";

class Message {
   static TITLE = new Message(`--- MASTERMIND ---`);
   static SECRET_PLAYER = new Message(`Propón una combinación secreta: `);
   static PROPOUSAL_PLAYER = new Message(`Propón una combinación: `);
   static HORIZONTAL_LINE = new Message(`-`);
   static VERTICAL_LINE = new Message(`|`);
   static TURN = new Message(`Turn: `);

   #string;

   constructor(string) {
      this.#string = string;
   }

   write() {
      console.write(this.#string);
   }

   writeln() {
      console.writeln(this.#string);
   }

   toString() {
      return this.#string;
   }
}

export { Message };
