import { console } from "../Utils/console.js";
import { CombinationView } from "./CombinationView.js";
import { Message } from "./Message.js";

class PlayerView {
   combinationView;
   constructor() {
      this.combinationView = new CombinationView();
   }
   interact() {}
   getSecretCombination() {}
}

class HumanPlayerView extends PlayerView {
   constructor() {
      super();
   }
   interact() {
      this.combinationView.readCombination(Message.PROPOUSAL_PLAYER);
   }
   getSecretCombination() {
      //TODO
      this.combinationView.readCombination(Message.SECRET_PLAYER);
   }
}

class RandomPlayerView extends PlayerView {
   constructor() {
      super();
   }
   interact() {
      console.writeln(`ITERACT ${this.combinationView.getRandomCombination()}`);
      console.readNumber("---*");
   }
   getSecretCombination() {
      console.writeln(`RANDOM ${this.combinationView.getRandomCombination()}`);
   }
}

export { HumanPlayerView, RandomPlayerView };
