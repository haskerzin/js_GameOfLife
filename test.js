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

// // aliveCells = aliveCells.filter(x => x != [200, 200]);
// console.log(aliveCells.filter(x => x[0]!=200 || x[1]!=200));
// console.log(aliveCells.filter(x => x != (200, 200)));

// const newvec = [];
// for(let i=0; i<aliveCells.length; i++){
//     newvec.push(aliveCells[i]);
// }

// console.log(newvec);

// removeCells = [[200,200], [220, 200]];

// for(let i = 0; i < removeCells.length; i++){
//     aliveCells = aliveCells.filter(x => x[0] != removeCells[i][0] || x[1] != removeCells[i][1]);
// };

console.log(aliveCells[0])
console.log(aliveCells.includes([200, 200], 0))

let checkElement = (array, element) => {
    for(let i = 0; i < array.length; i++){
        if(array[i][0] == element[0] && array[i][1] == element[1]){
            return true;
        }else{
            return false;
        }
    }
};

console.log(checkElement(aliveCells, [200, 200]));

let checkElement = (array, element) => {
    let contains = false;
    for(let i = 0; i < array.length; i++){
        if(array[i][0] == element[0] && array[i][1] == element[1]){
            contains = true;
        }
    }
    return contains;
};

vector = [[1,2], [3,4], [5,6]];

console.log(checkElement(vector, [5,6]))