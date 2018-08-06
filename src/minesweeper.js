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