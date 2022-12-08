import { console } from "../Utils/console.js";
import { CombinationView } from "./CombinationView.js";
import { Message } from "./Message.js";

class PlayerView {
   combinationView;

   constructor() {
      this.combinationView = new CombinationView();
   }
   play() {}
   getSecretCombination() {}
}

class HumanPlayerView extends PlayerView {
   constructor() {
      super();
   }
   play() {
      this.combinationView.readCombination(Message.PROPOUSAL_PLAYER);
   }
   getSecretCombination() {
      this.combinationView.readCombination(Message.SECRET_PLAYER);
   }
}

class RandomPlayerView extends PlayerView {
   constructor() {
      super();
   }
   play() {
      this.combinationView.getRandomCombination();
   }
   getSecretCombination() {
      this.combinationView.getRandomCombination();
   }
}

export { HumanPlayerView, RandomPlayerView };
