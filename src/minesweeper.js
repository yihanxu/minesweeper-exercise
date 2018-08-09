// Dynamic code version 5, 9 Aug 2018

// create the Game class
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  };

  playerMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
      if(this._board.playerBoard[rowIndex][columnIndex] === "B"){
        console.log('The game is over!');
        this._board.print();
      } else if(!this._board.hasSafeTiles){
        console.log('You have won the game!');
      } else {
        console.log('Current Board: ');
        this._board.print();
      }
  }
};

// create the Board class
class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows,
      numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,
      numberOfColumns, numberOfBombs);
  };

  get playerBoard (){
    return this._playerBoard;
  };

  flipTile (rowIndex, columnIndex) {
    if (this._bombBoard[rowIndex][columnIndex] === ' ') {
      console.log("This tile has already been flipped!");
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighbourBombs(
        rowIndex, columnIndex);
    }
    this._numberOfTiles -= 1;
  }

  // display the number of bombs adjacent to the flipped tile
  getNumberOfNeighbourBombs (rowIndex, columnIndex) {
  //A flipped tile can have 8 possible neighbors, at most, regardless the board size
    const neighbourOffsets = [
      [-1,-1],
      [-1,0],
      [-1,1],
      [0,-1],
      [0,1],
      [1,-1],
      [1,0],
      [1,1],
    ];

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;

    let numberOfBombs = 0;

    neighbourOffsets.forEach(offset => {
      const neighbourRowIndex = rowIndex + offset[0];
      const neighbourColumnIndex = columnIndex + offset[1];
      if (neighbourRowIndex >= 0 &&
        neighbourRowIndex <= numberOfRows &&
        neighbourColumnIndex >= 0 &&
        neighbourColumnIndex <= numberOfColumns) {
        if (this._bombBoard[neighbourRowIndex, neighbourColumnIndex] === 'B') {
          numberOfBombs += 1;
        }
      }
    });
    return numberOfBombs;
  };

  hasSafeTiles (){
    return this._numberOfTiles !== this._numberOfBombs;
  };

  print () {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  };

  // generate dynamically coded playboard
  static generatePlayerBoard (numberOfRows, numberOfColumns) {
    const board = [];
    for (let i = 0; i < numberOfRows; i ++){
      const row = [];
      for (let j = 0; j < numberOfColumns; j++){
        row.push(' '); //set empty space for each row
      }
      board.push(row);
    }
    return board;
  };

  // generate dynamically coded bomb board
  static generateBombBoard (numberOfRows, numberOfColumns, numberOfBombs) {
    const board = [];
    for (let i = 0; i < numberOfRows; i ++){
      const row = [];
      for (let j = 0; j < numberOfColumns; j++){
        row.push(null); //set empty space for each row
      }
      board.push(row);
    }

    let numberOfBombsPlaced = 0;
    while(numberOfBombsPlaced<numberOfBombs){
      let randomRowIndex;
      randomRowIndex = Math.floor(Math.random()*numberOfRows);
      let randomColumnIndex;
      randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
      // no need to plus one as the index starts from 0
      if(board[randomRowIndex][randomColumnIndex] != 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced += 1;}
      //fixed the issue of placing duplicated bomb
    }
    return board;
  };
}



// test sample
// console.log(generatePlayerBoard(3,3));
// const playerBoard = generatePlayerBoard(3,3);
// const bombBoard = generateBombBoard(3,3,4);

// console.log('Player Board:');
// printBoard(playerBoard);

// console.log('Bomb Board:');
// printBoard(bombBoard);

// flipTile(playerBoard, bombBoard, 0, 1);
// console.log('Updated Player Board:');
// printBoard(playerBoard);

// test the number of rows and columns
// console.log(bombBoard.length);
// console.log(bombBoard[0].length);

// test the Board and Game class
const g = new Game(3,3,3);
g.playerMove(0,0);
g.playerMove(0,1);
g.playerMove(1,0);
g.playerMove(2,0);






