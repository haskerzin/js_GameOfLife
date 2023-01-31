const canvas = document.getElementById("canvas");
const brush = canvas.getContext("2d");

brush.fillStyle = 'blue';
brush.fillRect(0, 0, canvas.width, canvas.height);

cellSize = 10;
cell = [10, 10];


for(let i=0; i<8; i++){
    console.log(
        [cell[0]+ cellSize * Math.pow(-1, i),
        cell[1] + cellSize * Math.pow(-1, i+1)]
    );
};

factors = [ -1, 0, 
            -1, -1, 
            0, -1, 
            1, -1,
            1, 0,
            1, 1,
            0, 1,
            -1, 1];

for(let i =0; i<factors.length/2; i++){
    console.log([factors[i], factors[i+1]]);
}


const vec = [];
let element = [];
for(let i = 0; i < 8; i++){
    element = [i, i];
    vec.push(element);
}
console.log(vec);

let cellSize = 20;
// Function that generates the neighborhood
let neighborhood = (cell) => {
    const result = [];
    const factors = [ -1, 0, 
        -1, -1, 
        0, -1, 
        1, -1,
        1, 0,
        1, 1,
        0, 1,
        -1, 1];
    const neighbor = [];
    for(let i=0; i<8; i+=2){
        neighbor = [cell[0] + cellSize * factors[i], cell[1] + cellSize * factors[i+1]];
        if (neighbor[0] >= 0 && neighbor[1] >= 0){
            result.push([neighbor[0], neighbor[1]]);
        }else{
            console.log(neighbor + " not a neighbor");
            console.log(result);
        }
    }
    console.log(result);
};

neighborhood([0, 0]);

const vecTest = [];
const count = vecTest.push('teste');
vecTest.push('teste2')
console.log(count);
console.log(vecTest)

let fruits = ['banana', 'mango', 'apple']
fruits = fruits.filter(x => x !== 'banana')
console.log(fruits);

let aliveCells = [];

aliveCells.push([200, 200], [220, 200], [240, 200], [220, 220]);

aliveCells = aliveCells.filter(x => x != [200, 200]);

console.log(aliveCells);

let i = 0;
while (i < 10) {
  task(i);
   i++;
}
function task(i) {
  setTimeout(function() {
      // Add tasks to do
  }, 2000 * i);
}

task(1);