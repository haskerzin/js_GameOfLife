const canvas = document.getElementById("canvas");
const brush = canvas.getContext('2d');

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

let aliveCells = [];
var newAliveCells = [];
var removeCells = [];

const cellSize = 20;
const gridColor = 'white';

let createRect = (x, y, width, height, color) => {
    brush.fillStyle = color;
    brush.fillRect(x, y, width, height);
};

let createLine = (x0, y0, x1, y1, color) => {
    brush.strokeStyle = color;
    brush.lineWidth = 1;
    brush.beginPath();
    brush.moveTo(x0, y0);
    brush.lineTo(x1, y1);
    brush.stroke();
};

let createGrid = () => {
    for(let i=0; i<canvas.width; i+=cellSize){
        createLine(i, 0, i, canvas.height, gridColor);
    };
    for(let j=0; j<canvas.height; j+=cellSize){
        createLine(0, j, canvas.width, j, gridColor);
    };
};

// Function that checks if a cell is in a list
let checkElement = (array, element) => {
    for(let i = 0; i < array.length; i++){
        if(array[i][0] == element[0] && array[i][1] == element[1]){
            return true;
        }else{
            return false;
        }
    }
};

let drawCell = (x, y, color) => {
    createRect(x, y, cellSize, cellSize, color);
};

// Function that generates the neighborhood
let neighborhood = (cell) => {
    let result = [];
    const factors = [ -1, 0, 
        -1, -1, 
        0, -1, 
        1, -1,
        1, 0,
        1, 1,
        0, 1,
        -1, 1];
    let neighbor = [];
    for(let i=0; i<16; i+=2){
        neighbor = [cell[0] + cellSize * factors[i], cell[1] + cellSize * factors[i+1]];
        if(neighbor[0] >= 0 && neighbor[1] >= 0){
            result.push([neighbor[0], neighbor[1]]);
        }
    }
    return result;
};

let rulesAliveCell = (cell, count) =>{
    // Cells that will die
    if(count < 2 || count > 3){
        removeCells.push(cell);
    }
};

let rulesDeadCell = (cell, count) => {
    if(count == 3){
        newAliveCells.push(cell);
    }
};

// Check neighbors function
let checkAliveNeighbors = (cell) => {
    let neighbors = neighborhood(cell);
    let count = 0;
    // Counting the number of alive neighbors
    for(let i=0; i < neighbors.length; i++){
        if(checkElement(aliveCells, neighbors[i])){
            count++;
        }
    }

    // Applying the rules
    if(checkElement(aliveCells, cell)){
        rulesAliveCell(cell, count);
    }else{
        rulesDeadCell(cell, count);
    }
};

let applyRules = () => {
    for(let i=0; i<canvas.width; i+=cellSize){
        for(let j=0; j<canvas.height; j+=cellSize){
            let cell = [i, j];
            checkAliveNeighbors(cell);
        }
    }
};

let updateCells = () => {
    // Removing the cells that died
    for(let i = 0; i < removeCells.length; i++){
        aliveCells = aliveCells.filter(x => x[0] != removeCells[i][0] || x[1] != removeCells[i][1]);
    };
    // Adding the new alive cells
    for(let j = 0; j < newAliveCells.length; j++){
        aliveCells.push(newAliveCells[j]);
    };
    // Reseting the arrays
    newAliveCells = [];
    removeCells = [];
};

// // Filling the canvas background
// createRect(0, 0, canvas.width, canvas.height, "green");
// // Drawing the grid
// createGrid();

// Defining initial condition
// aliveCells.push([200, 200], [220, 200], [240, 200], [220, 220]);

aliveCells.push([200, 200], [240, 200], [280, 200], [240, 220], [240, 240]);

let drawAliveCells = () => {
    for(let i = 0; i < aliveCells.length; i++){
        drawCell(aliveCells[i][0], aliveCells[i][1], "red");
    }
};

let playGame =  () => {
    createRect(0, 0, canvas.width, canvas.height, "green");
    createGrid();
    drawAliveCells();
    applyRules();
    console.log(removeCells);
    console.log("New alive cells: " + newAliveCells);
    updateCells();
};

let generations = 0;

// while(generations < 5){
//     playGame();
//     generations++;
// };

