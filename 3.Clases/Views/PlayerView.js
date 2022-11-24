import { console } from "../Utils/console.js";
import { CombinationView } from "./CombinationView.js";

class PlayerView {
   #player;

   constructor(player) {
      this.#player = player;
   }
}

class HumanPlayerView extends PlayerView {
   #combinationView;
   constructor(player) {
      super(player);
      console.writeln("llamar a propousalCombination ...");
      this.#combinationView = new CombinationView();
   }
}
class RandomPlayerView extends PlayerView {
   constructor(player) {
      super(player);
      console.writeln("llamar a secretCombination ...");
   }
}

export { HumanPlayerView, RandomPlayerView };
