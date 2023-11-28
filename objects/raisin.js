const raisinAlarm = function(cookie) {
  for (let i = 0; i < cookie.length; i++) { //loop through array
    if (cookie[i] === "🍇") {
      return "Raisin alert!"; // if cookie contains raisin returns the alert message
    }
  }
  return "All good!"; // no raisins = good!
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// ***Stretch Work***

const raisinAlarmArray = function(cookie) {
  let result = []; // Formating empty array to push results
  for (let ingredient of cookie) {
    if (ingredient.includes("🍇")) { // Checking array for raisin
      result.push("Raisin Alert"); //push alert message to empty array
    } else {
      result.push("All Good!"); // Push "All good" message for cookies to empty array
    }
  }
  return result; // Returning the new array of cookie notifications
};


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));