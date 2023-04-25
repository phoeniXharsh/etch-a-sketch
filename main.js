// Sets important constants and variables

let container = document.getElementById("container");
let newGridButton = document.getElementById("new-grid-button");


newGridButton.addEventListener('click', () =>{
	console.log("Before prompt");
	let rowsAndCols = window.prompt("Enter grid size: (Max Size is 100x100");
	console.log("After prompt");

	createGrid(rowsAndCols, rowsAndCols);
})

function createGrid(rows, columns) {
	for(let i=0; i<columns; ++i){
		let column  = document.createElement('div');
		column.className = 'column';
		for(let j=0; j<rows; ++j){
			let row = document.createElement('div');
			row.className = 'row';
			column.appendChild(row);

			row.addEventListener('mouseover', () => {
				row.style.backgroundColor = 'black';
			})
			
			row.addEventListener('mouseout', () => {
				row.style.backgroundColor = 'grey';
			})
		}
		container.appendChild(column);
	}
}



