// First version, 5 Aug 2018
// hard code borderline
const blankLine = '   |   |   ';
console.log('This is what an empty board would look like: ');
// demo grid
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);
// hard code a guess scenario
const guessLine = '1  |   |   ';
const bombLine = '   | B |   ';
console.log('This is what a board with a guess and a bomb on it would look like: ');
// demo grid
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);

// Second version, partially dynamic code, 5 Aug 2018
// generate a 3 x 3 grid
const printBoard = (board) =>{
	console.log('Current Board:');
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

// create an empty array for the board
let board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
    [' ', ' ', ' ']
];

// chech what the board looks like
printBoard(board);

// set value for player's guess
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);