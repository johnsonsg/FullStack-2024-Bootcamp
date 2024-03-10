// Whos Buying Lunch
function whosPaying(names) {
    // var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    
  return randomPerson + " is going to buy lunch today!";
}

