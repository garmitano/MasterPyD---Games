class Player {
   constructor() {}
   accept(visitor) {}
}

class HumanPlayer extends Player {
   constructor(player) {
      super();
   }
   accept(visitor) {
      visitor.visitHumanPlayer(this);
   }
   acceptSecret(visitor) {
      visitor.visitHumanSecretPlayer(this);
   }
}

class RandomPlayer extends Player {
   constructor() {
      super();
   }
   accept(visitor) {
      visitor.visitRandomPlayer(this);
   }
   acceptSecret(visitor) {
      visitor.visitRandomSecretPlayer(this);
   }
}

export { HumanPlayer, RandomPlayer };
