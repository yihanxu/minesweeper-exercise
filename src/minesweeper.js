// Dynamic code version 3, 6 Aug 2018

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

display the number of bombs adjacent to the flipped tile
const getNumberOfNeighbourBombs = (bombBoard, rowIndex, ColumnIndex) {
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
  const numberOfBombs = 0;
};



const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3,4);
const bombBoard = generateBombBoard(3,4,5);

console.log('Player Board:');
printBoard(playerBoard);

console.log('Bomb Board:');
printBoard(bombBoard);

// test the number of rows and columns
// console.log(bombBoard.length);
// console.log(bombBoard[0].length);







