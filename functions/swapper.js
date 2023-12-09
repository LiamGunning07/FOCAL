const swapper = function(key1, object1, key2, object2) {
  console.log("Swap!");// Put your solution here
 
  const value1 = object1[key1]; //assigning value1 variable to object1 && key1

  const value2 = object2[key2]; //assigning value2 variable to object2 && key2

  object2[key2] = value1; // reassiging value of object1 && key1 to object2 && key2

  object1[key1] = value2; // reassiging value of object2 && key2 to object1 && key1

  console.log("object1:", object1);
  console.log("object2:", object2);
};

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });