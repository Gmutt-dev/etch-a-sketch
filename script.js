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

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//draw the grid of div blocks on the DOM in .container <div>
function drawGrid(gridSize) {
    //reset (delete) the current grid (if any)
    removeGrid();
    //for loop to draw rows === gridSize param
    for (let i = 1; i <= gridSize; i++) {
        row = genRow(gridSize); // flexbox container <div> that contains blocks
        container.appendChild(row);
    }
}

function randomRGBColor() {
    return (Math.floor(Math.random() * 256));
}

function colorBlock(block) {
    //get the current block opacity
    let blockOpacity = Number.parseFloat(block.style.opacity) || 0;
    //change background color to random.  Note that this auto sets opacity to 100, hence the previous step.
    block.style.backgroundColor = `rgb(${randomRGBColor()}, ${randomRGBColor()}, ${randomRGBColor()})`;
    //increase current opacity by 10%, if not 100% already
    if (blockOpacity < 1) block.style.opacity = ((blockOpacity * 10 + 1) / 10).toString();
}

//SCRIPT ENTRY POINT
//get the .container div from the DOM
const container = document.querySelector(".container");

//initialize page with startup page content with 16 x 16 grid of blocks
let gridSize = 16;  // project requires initial grid to be 16 x 16
drawGrid(gridSize);

//add onmousever event handler to outer container box -> change background color
container.addEventListener("mouseover", (e) => {
    if (e.target !== container) {  //mouseover the outside container itself should not have an effect on the grid
        colorBlock(e.target);
        }
    }
)

//get the <button> from the DOM
const button = document.querySelector(".button");

//when button clicked, prompt for user input
button.addEventListener("click", (e) => {
    do {
        gridSize = Number.parseInt(prompt("Please enter the new number of squares per side? (max 100)", "16"));
        if (!((gridSize <= 100) && (gridSize >= 1))) alert("invalid input, please try again"); //test if input is max 100
    } while (!((gridSize <= 100) && (gridSize >= 1)));
    drawGrid(gridSize);
})