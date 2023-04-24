// Sets important constants and variables

let container = document.getElementById("container");

let rows = 16;
let columns = 16;

function createGrid(rows, columns) {
	for(let i=0; i<columns; ++i){
		let column  = document.createElement('div');
		column.className = 'column';
		for(let j=0; j<rows; ++j){
			let row = document.createElement('div');
			row.className = 'row';
			column.appendChild(row);
		}
		container.appendChild(column);
	}
}

createGrid(rows, columns);




