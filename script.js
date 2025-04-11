//generate a block <div> and return
function genBlock() {
    //create a new block element in memory
    const block = document.createElement("div");
    //add class = "block" attribute for CSS
    block.classList.add("block");
    
    return block;
}

//generate a row of blocks and return as <div> element
function genRow(gridSize) {
    //create a new row element in memory
    const row = document.createElement("div"); 
    //add class = "row" attribute for CSS
    row.classList.add("row");
    //add blocks to the row
    for (let i = 1; i <= gridSize; i++) {
        block = genBlock(); // <div> container block
        row.appendChild(block);
    }
    return row;
}

//draw the grid of div blocks on the DOM in .container <div>
function drawGrid(gridSize) {
    //for loop to draw rows === gridSize param
    for (let i = 1; i <= gridSize; i++) {
        row = genRow(gridSize); // flexbox container <div> that contains blocks
        container.appendChild(row);
    }
}

//SCRIPT ENTRY POINT
//get the .container div from the DOM
const container = document.querySelector(".container");
//initialize page with startup page content with 16 x 16 grid of blocks
let gridSize = 16;  // project requires initial grid to be 16 x 16
drawGrid(gridSize);