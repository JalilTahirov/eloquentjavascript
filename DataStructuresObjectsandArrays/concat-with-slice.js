["j","a","l"].concat(["i","l"])
(5) ["j", "a", "l", "i", "l"]
function remove(array, index){
	return array.slice(0,index)
				.concat(array.slice(index+1));
}
undefined
remove([2,3,4,5,6,7],4);
(5) [2, 3, 4, 5, 7]
remove([2,3,4,5,6,7],0);
(5) [3, 4, 5, 6, 7]
remove([2,3,4,5,6,7],[0,2,22]);
(6) [2, 3, 4, 5, 6, 7]
remove([2,3,4,5,6,7],5);
(5) [2, 3, 4, 5, 6]
