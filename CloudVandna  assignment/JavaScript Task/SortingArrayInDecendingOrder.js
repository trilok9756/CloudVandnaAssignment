const arr = [23,5,1,2,23445,64,2,223,43,2]; 

function arrSort(arr) { 
	arr.sort((a,b)=>a-b); 
	arr.reverse(); 
	return arr; 
} 

console.log(arrSort(arr)); 
