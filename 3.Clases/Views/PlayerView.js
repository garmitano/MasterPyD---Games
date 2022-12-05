import { console } from "../Utils/console.js";

class PlayerView {
   player;
   constructor(player) {
      this.player = player;
   }
}

class HumanPlayerView extends PlayerView {
   constructor(player) {
      super(player);
   }
}

class RandomPlayerView extends PlayerView {
   constructor(player) {
      super(player);
   }
   interact() {
      //secretcombination
   }
}

export { HumanPlayerView, RandomPlayerView };
