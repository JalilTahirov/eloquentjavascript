doit();
function doit(){
  console.log("");
}

////  


const power = (base,exponent) => {
  
  let result = 1;
  
  for(let count = 0; count<exponent; count++){
    result = result * base;
  }
  
  return result;
}
console.log(power(5,2));
