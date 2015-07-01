/*


  Find the maximum value in a list

  [3,4,6,8,19,120]
  Returns 120

 */

var findMaxIterative = function(array){
  var max = array[0] || null;

  for(var i = 0; i < array.length; i++){

    if(array[i] > max)
      max = array[i];

  }

  return max;
}

var findMaxRecursive = function(array, index, max){
  index = index || 0;
  max = max || array[0] || null;

  if(index === array.length)
    return max;

  if(array[index] > max)
    max = array[index];

  return findMaxRecursive(array, index + 1, max);

}

