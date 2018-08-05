// softcode version
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