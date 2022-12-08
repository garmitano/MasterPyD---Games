import { GameView } from "./Views/GameView.js";

class Mastermind {
   #gameView;

   constructor() {
      this.#gameView = new GameView();
   }

   playGames() {
      this.#gameView.playGames();
   }
}

new Mastermind().playGames();
