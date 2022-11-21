class Player {
   accept() {}
}

class HumanPlayer extends Player {
   accept(visitor) {
      visitor.visitHumanPlayer(this);
   }
}

class RandomPlayer extends Player {
   accept(visitor) {
      visitor.visitRandomPlayer(this);
   }
}

export { HumanPlayer, RandomPlayer };
