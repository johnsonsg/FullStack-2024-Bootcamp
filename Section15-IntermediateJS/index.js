// Guest List
const guestList = ['Shawn', 'Elliott', 'Pauline'];
console.log(guessList[0]);

var guestName = prompt('What is your name?');

if (guestList.includes(guestName)) {
  alert('Welcome ' + guestName)
} else {
  alert('Sorry, you are not on the list.')
}

// FizzBuzz
var output = [];
var count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push(FizzBuzz);
  } else if (count % 3 === 0) {
    // Fizz
    output.push('Fizz');
  } else if (count % 5 === 0) {
    output.push('Buzz');
  } else {
    output.push(count);
  }
  count++;
  console.log(output)
}