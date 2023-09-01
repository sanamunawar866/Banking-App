const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(" Welcome To Banking App");

console.log(" \n 1. Create New Account");
console.log(" \n 2. Deposit Money");
console.log(" \n 3. Withdraw Money");
console.log(" \n 4. Check Balance");
console.log(" \n 5. Transfer Money");
console.log(" \n 6. Exit");

const ip = () =>
  new Promise((resolve, reject) => {
    rl.question(" \n Enter Your Choice: ", (ch) => {
      resolve(ch);
    });
  });

const start = async () => {
  while (true) {
    const choice = await ip();

    if (choice == 1) {
      console.log(`Create Account`);
    } else if (choice == 2) {
      console.log(`Deposit Money`);
    } else if (choice == 3) {
      console.log(`Withdraw Money`);
    } else if (choice == 4) {
      console.log(`Check Balance`);
    } else if (choice == 5) {
      console.log(`Transfer Money`);
    } else {
      console.log("Exit");
      process.exit();
    }
  }
};

start();
