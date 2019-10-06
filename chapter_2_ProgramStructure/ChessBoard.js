//print one line of chess
// print second line whic is different


var column = 1;
var board = ''; 
while(column<9){   
    let count = column%2;
    column = column + 1;
    let row = '';
    while(row.length<8){
        if(count%2===0)
        {row = row + '#';}
        else 
        { row = row + ' ';}
        count +=1;
    }
    board = board + row  + '\n';
}
console.log(board);


////solution from book

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

