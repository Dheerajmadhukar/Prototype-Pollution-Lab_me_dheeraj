var person3 = new person("test", 55);

person3.constructor;  // prints the function "person" itself 

person3.constructor.constructor; // prints ƒ Function() { [native code] }    <- Global Function constructor

person3.constructor.constructor("return 1");

/*
ƒ anonymous(
) {
return 1
}
*/

// Finally call the function
person3.constructor.constructor("return 1")();   // returns 1