/*
  Reverse the order of the list recursively.
  [2,7,8,3,1,4]
  Returns [4,1,3,8,7,2]
 */
 var swap = function(array, one, two){
   var temp = array[one];
   array[one] = array[two];
   array[two] = temp;
 }

var reverseIterative = function(array){

  //function takes two indexes and swaps the values in the array

  var length = array.length - 1;

  for(var i = 0; i < array.length/2; i++){
    swap(array, i, length - i);
  }

  console.log(array);
}

var reverseRecursive = function(array, index){
  index = index || 0;
  var length = array.length - 1;

  if(index >= array.length/2)
    return;

  swap(array, index, length - index);

  reverseRecursive(array, index + 1);
}


var arr = [1,2,3,4,5,6];
reverseRecursive(arr);
console.log(arr)