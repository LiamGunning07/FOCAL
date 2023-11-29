const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
  } else {
    console.log(item);
  }
  });  
}

const array = ["A", ["B", "C"], "D", "E"];
const array1 = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array1);