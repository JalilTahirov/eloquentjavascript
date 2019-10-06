//print one line of chess
// print second line whic is different


var column = 1;
while(column<9){
    let row = '';
    let count = column%2;
    column = column + 1;
    while(row.length<8){
        if(count%2===0)
        {row = row + '#';}
        else 
        { row = row + ' ';}
        count +=1;
    }
    console.log(row);

}

