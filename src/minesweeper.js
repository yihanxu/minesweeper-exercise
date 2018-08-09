// Dynamic code version 5, 9 Aug 2018
class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = generatePlayerBoard(numberOfRows,
      numberOfColumns);
    this._bombBoard = generateBombBoard(numberOfRows,
      numberOfColumns, numberOfBombs);
    // this._numberOfRows = numberOfRows;
    // this._numberOfColumns = numberOfColumns;

  }
}





// generate dynamically coded playboard
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
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

// test sample
// console.log(generatePlayerBoard(3,3));

// generate dynamically coded bomb board
const generateBombBoard = (numberOfRows, numberOfColumns,
	numberOfBombs) => {
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

// display the number of bombs adjacent to the flipped tile

const getNumberOfNeighbourBombs = (bombBoard, rowIndex, columnIndex) =>{
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

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighbourOffsets.forEach(offset => {
  	const neighbourRowIndex = rowIndex + offset[0];
  	const neighbourColumnIndex = columnIndex + offset[1];
  	if (neighbourRowIndex >= 0 &&
  		neighbourRowIndex <= numberOfRows &&
  		neighbourColumnIndex >= 0 &&
  		neighbourColumnIndex <= numberOfColumns) {
  		if (bombBoard[neighbourRowIndex, neighbourColumnIndex] === 'B') {
  			numberOfBombs += 1;
  		}
  	}
  });
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (bombBoard[rowIndex][columnIndex] === ' ') {
  	console.log("This tile has already been flipped!");
  	return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
  	playerBoard[rowIndex][columnIndex] = 'B';
  } else {
  	playerBoard[rowIndex][columnIndex] = getNumberOfNeighbourBombs(
  		bombBoard,rowIndex, columnIndex);
  }
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3,3);
const bombBoard = generateBombBoard(3,3,4);

console.log('Player Board:');
printBoard(playerBoard);

console.log('Bomb Board:');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board:');
printBoard(playerBoard);

// test the number of rows and columns
// console.log(bombBoard.length);
// console.log(bombBoard[0].length);







