const { Console } = require("./console");

const console = new Console();

class BoardView {}
class Turn {
  constructor(modeGame) {
    console.writeln(`Modo de juego para sacar turno...${modeGame}`);
  }
}
class CombinationView {}
class Game {
  constructor() {}
}

class MastermindView {
  #modeGame;

  constructor() {
    this.#modeGame = this.askModeGame();
  }

  playGames() {
    do {
      let result = new GameView(this.#modeGame).playGame();
    } while (this.isResumed());
  }

  isResumed() {
    return console.writeln("Game Over");
  }

  askModeGame() {
    let modeGame;
    console.writeln("Modos de juego");
    console.writeln("(0)- Demo");
    console.writeln("(1)- Contra la PC");
    console.writeln("(2)- Dos jugadores");
    modeGame = console.readString("Elija modo de juego: ");
    return modeGame;
  }
}

class GameView {
  #boardView;
  #turn;
  #game;
  #combinationView;

  constructor(modeGame) {
    this.#turn = new Turn(modeGame);
    this.#boardView = new BoardView(this.#turn);
    this.#combinationView = new CombinationView(modeGame);
    this.#game = new Game(this.#turn, modeGame);
  }

  playGame() {
    do {
      console.writeln(`Modo de juego ${this.#turn}`);
    } while (!this.GameFinished());
  }

  GameFinished() {
    return true;
  }
}

new MastermindView().playGames();
