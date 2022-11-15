import { console } from "./console.js";

export class YesNoDialog {
   #answer = "";

   constructor() {
      this.read();
   }

   read() {
      let error = false;
      do {
         this.#answer = console.readString("Desea jugar otra ves?");
         error = !this.isAfirmative() && !this.isNegative();
         if (error) {
            console.writeln("Debe completar con si o no");
         }
      } while (error);
   }
   isAfirmative() {
      return this.#answer === "si";
   }
   isNegative() {
      return this.#answer == "no";
   }
}
