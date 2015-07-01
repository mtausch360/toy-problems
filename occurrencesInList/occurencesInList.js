/*
  Count the occurences of an element inside a list.
  Example: [2,7,4,4,1,4] for 4
  Returns 3
*/

var occurencesIterative = function(array, target){

  var occurences = 0;

  for(var i = 0; i < array.length; i++){

    if(array[i] === target)
      occurrences++;

  }

  return occurrences;

}


var occurrencesRecursive = function(array, target, index, occurrences){

  index = index || 0;
  occurrences = occurrences || 0;

  if(index === array.length)
    return occurrences;

  if(array[index] === target)
    occurrences++;

  return occurrencesRecursive(array, target, index + 1, occurrences);

}
