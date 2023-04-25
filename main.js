
let container = document.getElementById("container");
let newGridButton = document.getElementById("new-grid-button");
let clearGridButton = document.getElementById("clear-grid-button");
let eraserButton = document.getElementById("eraser-button");

// This event listener asks users the rows and columns and calls create function
newGridButton.addEventListener('click', () =>{
	let rowsAndCols = window.prompt("Enter grid size: (Max Size is 100x100");
	clearGrid();
	createGrid(rowsAndCols, rowsAndCols);
})

// flag to check if the eraser button is clicked and act accordingly
let eraserMode = false;
eraserButton.addEventListener('click', () => {
	eraserMode= !eraserMode;
	console.log("Eraser button is clicked")
});
  
// function to clear grid and event listener of clear grid
function clearGrid() {
	container.innerHTML = "";
}
clearGridButton.addEventListener('click', () => {
	clearGrid();
});

// This function actually creates the grid
function createGrid(rows, columns) {
    container.style.maxWidth = "960px";
    container.style.maxHeight = "960px";

    for(let i=0; i<columns; ++i){
        let column  = document.createElement('div');
        column.className = 'column';
        for(let j=0; j<rows; ++j){
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);

            row.addEventListener('mouseover', () => {
                let currentColor = row.style.backgroundColor;
                let newColor;
                if (eraserMode && currentColor !== '') { // if eraser mode is active and the square is not white
                    newColor = 'white';
					console.log("Eraser changed new color of div to white")
                } else if (currentColor === '') { // if the square is currently white
                    newColor = getRandomColor();
                } else { // otherwise, add 10% more black to the current color
                    newColor = darkenColor(currentColor);
                }
                
                row.style.backgroundColor = newColor;
            });
        }
        container.appendChild(column);
    }
}

// this function generates a random RGB color value
function getRandomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
  }
  // this  function reduces the red, green, and blue components of 
  // an RGB color value by 10% to create a slightly darker color
  function darkenColor(color) {
	let match = color.match(/rgb\((\d+), (\d+), (\d+)\)/);
	let r = Math.floor(match[1] * 0.9); // reduce the red component by 10%
	let g = Math.floor(match[2] * 0.9); // reduce the green component by 10%
	let b = Math.floor(match[3] * 0.9); // reduce the blue component by 10%
	return `rgb(${r}, ${g}, ${b})`;
  }



