const container = document.getElementsByClassName("container");
const cell = document.getElementsByClassName("cell");

const howMany = prompt("Enter no.of cells each side to create grid")

function createGrid(howMany){
    for(let i=0; i<howMany; i++){
        for(let j=0; j<howMany; j++){
            let row = document.createAttribute('div');
            container.appendchild(row).className('cell');
        }
    }
}

