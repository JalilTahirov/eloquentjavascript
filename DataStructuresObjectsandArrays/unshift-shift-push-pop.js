var todoList = [];

function rememberTo(task){
	todoList.push(task);
}

function whatIsNext(){
	return todoList.shift();
}

function urgentlyRememberTo(task){
	todoList.unshift(task);
}

rememberTo("work")

rememberTo("rest")

rememberTo("pi")

whatIsNext();
"work"
whatIsNext();
"rest"
urgentlyRememberTo("wake up");

