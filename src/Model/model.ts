export enum spotValue {
  empty,
  x,
  o,
}

enum winCondition {
  tie,
  winOrLoss,
}

const player1Name = "Player 1";
const player2Name = "Player 2";

class ticTacToeBoard {
  board: spotValue[][];
  currentTurn: spotValue;
  // player1 is x
  player1: Player;
  // player2 is o
  player2: Player;
  gameInProgress: boolean;
  // starts as undefined, which means there is not yet a winner
  gameWinner?: Player;

  constructor() {
    this.board = [
      [spotValue.empty, spotValue.empty, spotValue.empty],
      [spotValue.empty, spotValue.empty, spotValue.empty],
      [spotValue.empty, spotValue.empty, spotValue.empty],
    ];
    this.currentTurn = this.initCurrentTurn();
    this.gameInProgress = true;

    if (Math.random() > 0.5) {
      this.player1 = new Player(spotValue.x, winCondition.tie, player1Name);
      this.player2 = new Player(
        spotValue.o,
        winCondition.winOrLoss,
        player2Name
      );
    } else {
      this.player1 = new Player(
        spotValue.x,
        winCondition.winOrLoss,
        player1Name
      );
      this.player2 = new Player(spotValue.o, winCondition.tie, player2Name);
    }
  }

  // Mark a position as the current player
  makeMove(row: number, col: number) {
    if (!this.gameInProgress) {
      console.log("The game is not in progress");

    } else if (row >= 3 || row < 0 || col >= 3 || col < 0) {
      console.log("The given indicies are invalid");
    
    } else if (this.board[row][col] !== spotValue.empty) {
      console.log("The given spot is not empty");
 
    } else {
      this.board[row][col] = this.currentTurn;
      this.checkStateOfGame();
      this.changeTurn();
    }
  }

  // changes the turn
  changeTurn() {
    if (this.currentTurn === spotValue.o) {
      this.currentTurn = spotValue.x;
    } else {
      this.currentTurn = spotValue.o;
    }
  }

  // Checks to see if game is complete
  checkStateOfGame() {
    if (this.checkTie()) {
      if (this.player1.winCondition === winCondition.tie) {
        this.gameWinner = this.player1;
      } else {
        this.gameWinner = this.player2;
      }

      this.gameInProgress = false;
    } else if (this.isThereVictor()) {
      if (this.player1.winCondition === winCondition.winOrLoss) {
        this.gameWinner = this.player1;
      } else {
        this.gameWinner = this.player2;
      }

      this.gameInProgress = false;
    }
  }

  // checks to see if there is a tie
  checkTie() {
    if (this.isBoardFull() && !this.isThereVictor()) {
      return true;
    } else {
      return false;
    }
  }

  // check to see if there is a victor
  isThereVictor() {
    if (this.checkCardWin() || this.checkDiagWin()) {
      return true;
    } else {
      return false;
    }
  }

  // checks to see if there is a winning configuration in the cardinal directions
  checkCardWin() {
    for (var i = 0; i < this.board.length; i++) {
      // Checks cols
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== spotValue.empty
      ) {
        return true;
      }

      // Checks rows
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i] !== spotValue.empty
      ) {
        return true;
      }
    }

    return false;
  }

  // checks to see if there is a winning configuration diagonally
  checkDiagWin() {
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== spotValue.empty
    ) {
      return true;
    }

    if (
      this.board[2][0] === this.board[1][1] &&
      this.board[1][1] === this.board[0][2] &&
      this.board[1][1] !== spotValue.empty
    ) {
      return true;
    }

    return false;
  }

  // check to see if all positions are full
  isBoardFull() {
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === spotValue.empty) {
          return false;
        }
      }
    }

    return true;
  }

  // Helper function for constructor
  initCurrentTurn() {
    if (Math.random() > 0.5) {
      return spotValue.o;
    } else {
      return spotValue.x;
    }
  }

  // returns the spotValue at a given position
  getValueAt(row: number, col: number) {
    if (row >= 3 || row < 0 || col >= 3 || col < 0) {
      console.log("The given indicies are invalid");
      throw new Error("The given indicies are invalid");
    }

    return this.board[row][col];
  }

  // returns the winner
  getWinner() {
    return this.gameWinner;
  }

  // Resets the game
  resetGame() {
    this.board = [
      [spotValue.empty, spotValue.empty, spotValue.empty],
      [spotValue.empty, spotValue.empty, spotValue.empty],
      [spotValue.empty, spotValue.empty, spotValue.empty],
    ];
    this.currentTurn = this.initCurrentTurn();
    this.gameInProgress = true;

    if (Math.random() > 0.5) {
      this.player1 = new Player(spotValue.x, winCondition.tie, player1Name);
      this.player2 = new Player(
        spotValue.o,
        winCondition.winOrLoss,
        player2Name
      );
    } else {
      this.player1 = new Player(
        spotValue.x,
        winCondition.winOrLoss,
        player1Name
      );
      this.player2 = new Player(spotValue.o, winCondition.tie, player2Name);
    }
  }
}

// Player class, contains mark (is player x or o),
// and winCondition
export class Player {
  mark: spotValue;
  winCondition: winCondition;
  name: String;

  constructor(mark: spotValue, winCon: winCondition, name: String) {
    this.mark = mark;
    this.winCondition = winCon;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getMarkAsString() {
    if (this.mark === spotValue.x) {
      return "X";
    } else {
      return "O";
    }
  }

  getWinConditionkAsString() {
    if (this.winCondition === winCondition.tie) {
      return "tying";
    } else {
      return "winning or losing";
    }
  }
}

export default ticTacToeBoard;
