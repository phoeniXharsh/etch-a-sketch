// Sets important constants and variables

const container = document.getElementById("container");
// let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

let rowNum = 16;
// Creates a default grid sized 16x16
function createGrid(rowNum) {
  for (r = 0; r < rowNum; r++) {
    for(c = 0; c< rowNum; c++){
			container.appendChild((makeRows(container.clientWidth/rowNum)));
		}
  }
}

// Takes (rows, columns) input and makes a grid
function makeRows(size) {
	let row = document.createElement('div');
	row.classList.add('cell');
	row.style.width = `${size}px`;
	row.style.height = `${size}px`;
	return row;
};

createGrid(rowNum);




