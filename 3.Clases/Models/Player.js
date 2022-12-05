class Player {
   constructor() {}
   accept(visitor) {}
}

class HumanPlayer extends Player {
   constructor() {
      super();
   }
   accept(visitor) {
      visitor.visitHumanPlayer(this);
   }
}

class RandomPlayer extends Player {
   constructor() {
      super();
   }
   accept(visitor) {
      visitor.visitRandomPlayer(this);
   }
}

export { HumanPlayer, RandomPlayer };
