/*

    Put Every Element Of An Array Into Its own list

    [2,7,8,3,1,4]
    Returns [[2], [7], [8], [3], [1], [4]]

 */



var subArrayIterative = function(array){

  for(var i = 0; i < array.length; i++){

    array[i] = [array[i]];

  }

}


var subArrayRecursive = function(array, index){


  if(index === array.length) return;

  array[index] = [array[index]];

  subArrayRecursive(array, index + 1);

}

var subArrayRecursiveNoMutate = function(array, index){

  if(index === undefined){
    index = 0;
    array = array.slice();
  }

  if(index === array.length)
    return array;

  array[index] = [array[index]];

  subArrayRecursiveNoMutate(array, index + 1)
}

var recursiveListSeparate = function(arr) {
  console.log('arr: ', arr);
  if(!arr.length) { return arr; }
  return recursiveListSeparate(arr.slice(0,-1)).concat([[arr[arr.length-1]]]);
};


var arr = [2,7,8,3,1,4];
var test;
test = subArrayRecursiveNoMutate(arr);
console.log(test, arr);
console.log('should be false:',arr === test);