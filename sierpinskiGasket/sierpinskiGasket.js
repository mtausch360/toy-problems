
/*
Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.
Here are the first few iterations. The fractal is composed entirely of L and white-space characters;
each character has one space between it and the next (or a newline).
0
L

1
L
L L

2
L
L L
L   L
L L L L

3
L
L L
L   L
L L L L
L       L
L L     L L
L   L   L   L
L L L L L L L L

Spacing

n = 0
1  = 1
L

n = 1
123 = 3
L L
  3


n = 2
12345 = 5
L   L

1234567 = 7
L L L L


n = 3
    7
123456789 = 9
L       L
     6
12345678912 = 11
L L     L L

  3   3   3
1234567891234 = 13
L   L   L   L

123456789123456 = 15
L L L L L L L L



*/


/*

  the nth sierpinski gasket consists of 3 (1 on top of 2 consecutive) n-1th sierpinski gaskets

  0 sierpinski gasket contains only one L. It is the building block of the following triangles

*/

//takes one triangle and makes

var stitch = function(triangle){

}

var sierpinski = function(n) {
  if(n === 0) return  'L';

  return sierpinski(n-1) +'\n' + sierpinski(n-1) + sierpinski(n-1);


}

console.log(sierpinski(1));