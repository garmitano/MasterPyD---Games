import { console } from "./Utils/console.js";
import { isContinuedDialogView } from "./Views/isContinuedDialog.js";

// const console = new Console();

class BoardView {
   #board;

   constructor() {
      this.#board = new Board();
   }

   showTitle() {
      console.writeln("-------Mastermind-------");
   }
}

class Board {}

class TurnView {
   #turn;
   #combinationView;
   #boarView;

   constructor(boardView) {
      this.#boarView = boardView;
      this.#turn = new Turn();
      this.#combinationView = new CombinationView();
   }

   askModeGame() {
      let numPlayers;
      console.writeln("Modos de juego");
      console.writeln("(0)- Demo");
      console.writeln("(1)- Human vs Machine");
      console.writeln("(2)- Human vs Human");
      numPlayers = console.readString("Elija modo de juego: ");
      return numPlayers;
   }

   interact(numPlayers) {
      if (numPlayers == 0) {
         console.writeln("Demo");
      } else if (numPlayers == 1) {
         console.writeln("Human vs Machine");
      } else {
         console.writeln("Human vs Human");
      }
   }
}

class Turn {
   constructor() {
      console.writeln(`Dentro de Turn`);
   }
}

class CombinationView {
   constructor() {
      console.writeln(`Dentro de CombinationView`);
   }
}

class Game {
   #MAX_ATTEMPS = 10;
   constructor() {
      console.writeln(`Dentro de Game ${this.#MAX_ATTEMPS}`);
   }

   isFinished() {
      return true;
   }
}

class GameView {
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
      let numPlayers = this.#turnView.askModeGame();
      this.#boardView.showTitle();
      do {
         this.#turnView.interact(numPlayers);
      } while (!this.#game.isFinished());
   }

   isResumed() {
      let isContinued = new isContinuedDialogView();
      return isContinued.isAfirmative();
   }
}

class Mastermind {
   #game;
   #gameView;

   constructor() {
      this.#game = new Game();
      this.#gameView = new GameView(this.#game);
   }

   playGames() {
      this.#gameView.playGames();
      console.writeln("Game Over");
   }
}

new Mastermind().playGames();
