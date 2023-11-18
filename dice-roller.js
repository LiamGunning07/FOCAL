// Get the command line argument
const args = process.argv.slice(2);

// Check if a valid number is provided as a command line argument
const numberOfDice = parseInt(args[0]);

if (isNaN(numberOfDice) || numberOfDice <= 0) {
  console.log("Please provide a valid positive number as a command line argument.");
} else {
  // Roll the dice
  console.log(`Rolling ${numberOfDice} six-sided dice...`);
  
  for (let i = 0; i < numberOfDice; i++) {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    console.log(`Die ${i + 1}: ${rollResult}`);
  }
}

