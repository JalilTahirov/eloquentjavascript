
function range(start, end){
	let arr = [];
    for(let i = start; i < end+1; i++){
    	arr.push(i);
    }
    return arr;
}

function sum( array ){
	let result = 0;
    for(let number of array){
    	result += number;
    }    
    return result;
}


sum(range(2,6))
//20
sum(range(2,4))
//9
sum(range(1,4))
//10
