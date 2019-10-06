//for each number from 1 to 100
    // check if it divides by 3 add to string fizz
    //check if it divides by 5 add to string buzz
    //print the string
    let number = 1;
    let result = "";
    while(number < 18){
        
      
        if(number%3===0){
            result += "Fizz"
        }
    
        if(number%5===0){
            result += "Buzz"
        }
    
        console.log(result||number);
      
        number = number +1;
        result = "";
    }
        
    