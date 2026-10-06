console.log("Task1________________");
function makeAccount(initial) {
  var balance = initial;

  return {
    withdraw: function (amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return "Here's your money: $" + amount;
      }
      return "Insufficient funds.";
    },

    deposit: function (amount) {
      balance = balance + amount;
      return amount + "$ has been added to ur account";
    },
  };
}
var account = makeAccount(100);
console.log(account.withdraw(50));

console.log(
  "Question2: If we want to deposit money we need to add another function inside of it that will make us able to invoke a second function in the same one ",
);
console.log("Question3: we have to use something called AddingMethod");
console.log("Task2_______________");
function makeAccount(initial) {
  var balance = initial;
  return {
    withdraw: function (amount) {
      if (balance - amount >= 0) {
        balance = balance - amount;
        return "Here's your money:" + amount;
      }
      return "Insufficient funds.";
    },
    deposit: function (amount) {
      balance = balance + amount;
      return "Your balance is :" + "$" + balance;
    },
    balance: function () {
      return balance;
    },
  };
}
var account = makeAccount(100);
console.log(account.withdraw(50)); //Here's your money:50
console.log(account.withdraw(60)); //Insufficient funds.

console.log("Task2:Question 1 __________");
console.log(
  "we call it account.withdraw(50) so we can specifically use the withdraw function on the account and if we did account(50) nothing will happen no function will be used for it",
);

console.log("Task3_______________");
console.log(account.deposit(10));
console.log(account.withdraw(60));
let badisAccount = makeAccount(300);
console.log(badisAccount.withdraw(200));
console.log(badisAccount.deposit(200));
console.log(badisAccount.deposit(200));

console.log("Task4______________________");
var account = makeAccount(100);
account.deposit(25);
console.log(account.balance());
account.withdraw(50);
console.log(account.balance()); // 75

console.log("Task5______________________");
function makeBookLibrary() {
  var books = [];
  return {
    addBook: function (title) {
      books.push(title);
      return "Added:" + title;
    },
    borrowBook: function (title) {
      for (let i = 0; i < books.length; i++) {
        if (books[i] === title) {
          books.splice(i, 1);
          return "Borrowed: " + title;
        }
      }
      return "Book not available.";
    },
    listBooks: function () {
      if (books.length === 0) {
        return "Book not available";
      }
      return books;
    },
  };
}
var library = makeBookLibrary();
console.log(library.addBook("1984"));
console.log(library.addBook("The Hobbit"));
console.log(library.listBooks()); // => ["1984", "The Hobbit"]
console.log(library.borrowBook("1984")); // => "Borrowed: 1984"
console.log(library.borrowBook("1984")); // => "Book not available."
console.log(library.listBooks()); // => ["The Hobbit"]

console.log("Task6_______________________");
function makeClassmate(name) {
  var grades = [];
  return {
    addGrade: function (grade) {
      grades.push(grade);
      return name + "'s" + "grade added:" + grade;
    },
    getAverage: function () {
      if (grades.length === 0) {
        return 0;
      } else var sum = 0;
      for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
      }
      return sum / grades.length;
    },
    getGrades: function () {
      return grades;
    },
  };
}
var alice = makeClassmate("Alice");
console.log(alice.addGrade(15)); // => "Alice's grade added: 15"
console.log(alice.addGrade(18)); // => "Alice's grade added: 18"
console.log(alice.getAverage()); // => 16.5
console.log(alice.getGrades()); // => [15, 18]

console.log("Task7____________________________________");
function makePet(petName) {
  var hunger = 0;
  var happiness = 50;
  return {
    feed: function () {
      hunger = hunger - 20;
      if ((hunger = 0));
      return petName + "Was fed.Hunger:" + hunger;
    },
    play: function () {
      happiness = happiness + 15;
      if (happiness === 100);
      return petName + " played! Happiness: " + happiness;
    },
    status: function () {
      return { name: petName, hunger: hunger, happiness: happiness };
    },
  };
}
var cat = makePet("Whiskers");
console.log(cat.feed());
console.log(cat.play());
console.log(cat.status());

console.log("Task8___________________________");
function makeScoreboard(player1, player2) {
  var scores = {};
  scores[player1] = 0;
  scores[player2] = 0;
  return {
    addPoint: function (player) {
      scores[player] += 1;
      return player + " scored! Score: " + scores[player];
    },
    getScore: function (player) {
      return scores[player];
    },
    reset: function () {
      scores[player1] = 0;
      scores[player2] = 0;
      return "Scores reset.";
    },
  };
}
var game = makeScoreboard("Alex", "Sam");
console.log(game.addPoint("Alex")); // => "Alex scored! Score: 1"
console.log(game.addPoint("Sam")); // => "Sam scored! Score: 1"
console.log(game.addPoint("Alex")); // => "Alex scored! Score: 2"
console.log(game.getScore("Alex")); // => 2
console.log(game.getScore("Sam")); // => 1
console.log(game.reset()); // => "Scores reset."
console.log(game.getScore("Alex")); // => 0
