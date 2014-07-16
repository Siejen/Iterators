# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working. 


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

A higher order function can accept a function as a parameter, or return a function as the return value. It can invoke the function that it was passed as a parameter. 

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

<hr>

`note` Perhaps you meant the following syntax style: `var maxVal = max( arr );`

or perhaps this: `var maxVal = arr.max();`

For what it's worth, I'm using the latter.
<hr>


`arr.max()` a method defined on an array, takes no parameters, returns the maximum value in the array. Elements in the array must be testable using the `<` operator.

Example:

```
// maxVal is assigned the value 10
var arr = [ 1, 2, 10, -3, 4 ];
var maxVal = arr.max();
```

<hr>
`arr.min()` a method defined on an array, takes no parameters, returns the minimum value in the array. Elements in the array must be testable using the `<` operator.

Example:

```
// minVal is assigned the value -3
var arr = [ 1, 2, 10, -3, 4 ];
var minVal = arr.min();
```

<hr>
`arr.each( action )` a method defined on an array, takes one parameter: action (a function). `each` calls the function `action` on each element in the array, and then returns the array itself, with no modification. The function `action` should have no side effects on the array.

Example:

```
// each array element is logged to the console
var clogItem = function( item ) {
    console.log( item );
}

var arr = [ "a", 1, { foo: "bar" } ];
arr.each( clogItem );
```

<hr>
`arr.map( action )` a method defined on an array, takes one parameter: action (a function). Returns a new array, the result of calling the function `action` on each element in the original array.

Example:

```
// squares is assigned [1, 4, 9], as a new array

var squarer = function( num ) {
    return num*num;
}

var arr = [1, 2, 3];
var squares = arr.map( squarer );
```

<hr>
`arr.filter( test )` a method defined on an array, takes one parameter: test (a function). Returns a new array containing only the array elements that pass the test. In effect, filter uses the test to discrimintate between wanted and unwanted array elements.

Example:

```
// legal is assigned [21, 32, 42, 64], as a new array
var test = function( num ) {
    return num >= 21;
}

var arr = [ 16, 18, 21, 32, 42, 64 ];
var legal = arr.filter( test );
```

<hr> 
`arr.reduce( combiner )` a method defined on an array, takes one parameter: combiner (a function). Returns a single value (i.e. not an array) which is the result of combining each element in the array using the combine function. The combine function takes two parameters, and combines them.

```
// result is assigned the value 6, i.e. 1+2+3
var combiner = function( lhs, rhs ) {
    return lhs + rhs;
}

var arr = [1, 2, 3];
var result = arr.reduce( combiner );
```

<hr>
`arr.reject( test )` essentially the opposite of filter (see above). Creates a new array from `arr` using only elements that fail the test.

```
// minor is assigned [16, 18], as a new array
var test = function( num ) {
    return num >= 21;
}

var arr = [ 16, 18, 21, 32, 42, 64 ];
var minor = arr.reject( test );
```

<hr>

Use the notes provided to help guide you explanation.




### Phase-2 

* Write a test in the `test` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration. 

* Re-implement the `each` function we did in class, but write the spec for it first. Continue this exercise with `map` and `filter`.


### Phase-3

Implement the remaining iterator methods in the namespace.


### Phase-4

Refactor the following code using `map` to make only one call to the `map` function versus the two below.


```
var myNumbers = [ -1, 2, -3, 4, -5, 6];

var square = function(num) {
	return num * num;
};

var sqrRoot = function(num) {
	return Math.sqrt(num);
};


var sqrNumbers = map(myNumbers, square);
var absNumbers = map(sqrNumbers, sqrRoot);
```




