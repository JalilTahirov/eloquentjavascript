function argumentCounter(){
	return "I have " + arguments.length +  "arguments"
}
undefined
argumentCounter(3);
"I have 1arguments"
function argumentCounter(){
	return "I have " + arguments.length +  " arguments"
}
undefined
argumentCounter(4,4,5,1);
"I have 4 arguments"
