/*const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
};

const actionWhenFound = function(index) {
  console.log("Found him at index " + index + "!");
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
*/

const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);   // pass the index as an argument to the callback
    }
  });
}

const actionWhenFound = function(index) {
  console.log("Found him on index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
