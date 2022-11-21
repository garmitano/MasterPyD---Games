import { console } from "../Utils/console.js";

class PlayerView {
   #player;
   constructor(player) {
      this.#player = player;
   }
}

class HumanPlayerView extends PlayerView {
   constructor(player) {
      super(player);
      console.writeln("llamar a propousalCombination ...");
   }
}
class RandomPlayerView extends PlayerView {
   constructor(player) {
      super(player);
      console.writeln("llamar a secretCombination ...");
   }
}

export { HumanPlayerView, RandomPlayerView };
