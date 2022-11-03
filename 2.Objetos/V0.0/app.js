const { Console } = require("./console");

const console = new Console();

initMastermindView().play();

function initMastermindView() {
  const title = "------MasterMind-----";
  return {
    play: function () {
      const continueDialog = continuedDialogView(
        "Quiere jugar otra ves?(si/no)"
      );
      do {
        initGameView(title).play();
        continueDialog.read();
      } while (continueDialog.isAfirmative());
    },
  };
}

function continuedDialogView(question) {
  let answer = "";
  return {
    read: function () {
      let error = false;
      do {
        answer = console.readString(question);
        error = !this.isAfirmative() && !this.isNegative();
        if (error) {
          console.writeln("Debe completar con si o no");
        }
      } while (error);
    },
    isAfirmative: function () {
      return answer === "si";
    },
    isNegative: function () {
      return answer == "no";
    },
  };
}

function initGameView(title) {
  const game = initGame();
  const board = initBoardView(title);

  return {
    play: function () {
      board.showTitle();
      do {
        const propousalCombination =
          initCombinationView().getPropousalCombination();
        game.addPropouseCombination(propousalCombination);

        console.writeln(
          `Intento nro: ${game.getAttemps()} resultado: ${game.getResult(
            propousalCombination
          )} ${game.isLoser()} ${game.isWinner()} ${game.finished()}`
        ); //llevar a una vista
      } while (!game.finished());
      console.writeln("GANO");
    },
  };
}

function initGame() {
  const MAX_ATTEMPS = 10;
  let propousalsCombinations = [];
  const secretCombination = initSecretCombination().getSecretCombination();

  return {
    addPropouseCombination: function (propousalCombination) {
      propousalsCombinations.push(propousalCombination);
      console.writeln(`${propousalCombination} ${propousalsCombinations}`);
    },
    getResult: function (propousalCombination) {
      result = [];
      [...secretCombination].forEach((element, index) => {
        if ([...propousalCombination].indexOf(element) === index) {
          result.push("b");
        } else if (propousalCombination.includes(element)) {
          result.push("w");
        } else {
          result.push(" ");
        }
      });
      return result;
    },
    isLoser: function () {
      return this.getAttemps() === MAX_ATTEMPS ? true : false;
    },
    isWinner() {
      return result.every((element) => element === "b");
    },
    finished: function () {
      return this.isLoser() || this.isWinner();
    },
    getAttemps: function () {
      return propousalsCombinations.length;
    },
    getMaxAttemps: function () {
      return MAX_ATTEMPS;
    },
  };
}

function initCombinationView() {
  const combination = initCombination();
  return {
    getPropousalCombination: function () {
      let propousalCombination = "";
      do {
        propousalCombination = console.readString("Propon una combinación: ");
        if (!combination.hasValidLengh(propousalCombination)) {
          console.writeln("Debe ingresar una combinacion de 4 colores\n");
        } else if (!combination.hasValidColors(propousalCombination)) {
          console.writeln("Debe ingresar colores correctos");
        } else if (combination.hasRepeatedColors(propousalCombination)) {
          console.writeln("Al menos un color esta repetido.\n");
        }
      } while (combination.isNotValid(propousalCombination));
      return propousalCombination;
    },
  };
}

function initCombination() {
  const COMBINATION_LENGTH = 4;
  const POSIBLE_COLORS = "rgbypw";
  const NAME_COLORS = ["Red", "Green", "Blue", "Yellow", "Pink", "White"];
  return {
    hasValidLengh: function (propousalCombination) {
      return propousalCombination.length === COMBINATION_LENGTH;
    },
    hasValidColors: function (propousalCombination) {
      const colors = POSIBLE_COLORS;
      const unionColors = new Set([...colors, ...propousalCombination]);
      return unionColors.size === 6 ? true : false;
    },
    hasRepeatedColors(propousalCombination) {
      let colors = [...propousalCombination];
      let count = 0;
      for (i = 0; i < colors.length; i++) {
        for (j = 0; j < colors.length; j++) {
          if (colors[i] === colors[j]) {
            count++;
          }
        }
      }
      return count > 4 ? true : false;
    },
    isNotValid: function (propousalCombination) {
      return this.hasRepeatedColors(propousalCombination);
    },
    getPosibleColors: function () {
      return POSIBLE_COLORS;
    },
    getCombinationLength: function () {
      return COMBINATION_LENGTH;
    },
    getNameColors: function () {
      return NAME_COLORS;
    },
  };
}

function initSecretCombination() {
  const combinations = initCombination();
  let secretCombination = "";
  const posibleColors = combinations.getPosibleColors();

  return {
    getSecretCombination: function () {
      let color = "";
      let count = 0;
      do {
        color = combinations.getPosibleColors()[parseInt(Math.random() * 6)];
        if (!secretCombination.includes(color)) {
          secretCombination += color;
          count++;
        }
      } while (count < combinations.getCombinationLength());
      console.writeln(secretCombination);
      return secretCombination;
    },
  };
}

function initBoardView(title) {
  const game = initGame();
  return {
    showTitle: function () {
      const combination = initCombination();
      const colors = combination.getPosibleColors();
      const nameColors = combination.getNameColors();
      console.writeln(`${title}\n`);
      console.writeln(`Colores posibles: \n`);
      for (i = 0; i < colors.length; i++) {
        console.write(`${colors[i]} => ${nameColors[i]}\n`);
      }
      console.writeln(`Nro maximo de intentos: ${game.getMaxAttemps()}\n`);
    },
  };
}
