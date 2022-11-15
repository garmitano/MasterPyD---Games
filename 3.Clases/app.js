import { Game } from "./Models/Game.js";
import { GameView } from "./Views/GameView.js";

class Mastermind {
   #game;
   #gameView;

   constructor() {
      this.#game = new Game();
      this.#gameView = new GameView(this.#game);
   }

   playGames() {
      this.#gameView.playGames();
   }
}

new Mastermind().playGames();
