// "use strict"
//
const baseContainer = document.getElementById('base-container')
const columns = 32;
const rows = 48;
const initialGrid = [];

function onload(){
  let grid = this.createInitialGrid(columns, rows)
  this.renderGrid()
}


function renderGrid(lenght){
  for(let i = 0; i < initialGrid.length; i++){
    let cell = document.createElement('div')
    cell.setAttribute("id", "box-" + initialGrid[i].id)
    cell.className = "boxes"
    cell.setAttribute("style" , "grid-column: "+ initialGrid[i].gridColumn +"; grid-row: "+ initialGrid[i].gridRow +";background-color: "+ initialGrid[i].backgroundColor +"")
    baseContainer.appendChild(cell)
    console.log(cell);
  }
}

function createInitialGrid(columns, rows) {
  let id = 0;

  for(let i = 1; i <= columns; i++){
    for(let y = 1; y <= rows; y++){
      id = id + 1
      let cellData = new Cell(i, y, "white", id)
      initialGrid.push(cellData)
    }
  }
  return initialGrid
}

class Cell {
  constructor(positionX, positionY, color, id){
      this.id = id
      this.gridColumn = (positionX + " / " + (positionX + 1))
      this.gridRow = (positionY + " / " + (positionY + 1))
      this.backgroundColor = color
  }
}

/* .box-1 {
  grid-column: 1 / 5;
  grid-row: 1 / 2;
  background-color: yellow;

  123
  123
  123
}*/
