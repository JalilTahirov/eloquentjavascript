//for each number from 1 to 100
    // check if it divides by 3 add to string fizz
    //check if it divides by 5 add to string buzz
    //print the string
    let number = 1;
    let result = "";
    while(number < 100){      
        if(number%3==0) result += "Fizz";    
        if(number%5===0) result += "Buzz";    
        console.log(result||number);      
        number = number +1;
        result = "";
    }
//solution from book
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
      }
        
    