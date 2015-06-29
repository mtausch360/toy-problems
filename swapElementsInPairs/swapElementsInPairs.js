/*
  Swap all elements in pairs.
  If the length of the list is odd, the last element stays in place.

  [2,7,8,3,1,4]
  Returns [7,2,3,8,4,1]

  [3,6,8,1,5]
  Returns [6,3,1,8,5]
*/

var swap = function(array, one, two){
  var temp = array[one];
  array[one] = array[two];
  array[two] = temp;
}

var swapElementsPairIterative = function(array){

  for(var i = 1; i < array.length; i += 2){
    swap(array, i, i - 1);
  }

}

var swapElementsPairRecursive = function(array, index){

  index = index || 1;

  if(array.length <= index)
    return;

  swap(array, index, index - 1);

  swapElementsPairRecursive(array, index + 2);
}


var arr0 = [2,7,8,3,1,4];
var arr1 = [3,6,8,1,5];

swapElementsPairRecursive(arr0);
swapElementsPairRecursive(arr1);

console.log(arr0);
console.log(arr1);
