/*

  Create a range list counting from a start to an end. Excluding the end.

  2,5
  Returns [2,3,4]

  8,1
  Returns [8,7,6,5,4,3,2]

  3,3
  Returns []

 */

var rangeListIterative = function(start, end){
  var range = [];

  //counting up
  if(start <= end){
    for(var i = start; i < end; i++){
      range.push(i);
    }
  }
  //counting down
  else{
    for(var i = start; i > end; i--){
      range.push(i);
    }
  }
  return range;
}

var rangeListRecursive = function(start, end, range, currentValue){

  range = range || [];
  currentValue = currentValue || start;

  //counting up
  if(start < end){
    if(currentValue === end)
      return range;

    range.push(currentValue);
    currentValue++;
  }
  //counting down
  else{
    if(currentValue === end)
      return range;

    range.push(currentValue);
    currentValue--;
  }

  return rangeListRecursive(start, end, range, currentValue)

}




// var range0 = rangeListIterative(2,5);
// var range1 = rangeListIterative(8,1);
// var range2 = rangeListIterative(3,3);

var range0 = rangeListRecursive(2,5);
var range1 = rangeListRecursive(8,1);
var range2 = rangeListRecursive(3,3);

console.log("should be [2,3,4]:        ", range0);
console.log("should be [8,7,6,5,4,3,2]:", range1);
console.log("should be []:             ", range2);
