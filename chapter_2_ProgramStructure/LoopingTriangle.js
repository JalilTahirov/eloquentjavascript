//// my solution

var floor = "#";
while(floor.length < 8){
    console.log(floor);
    floor += "#";
}

//// solution from the book
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);