// Guest List
const guestList = ['Shawn', 'Elliott', 'Pauline'];
console.log(guessList[0]);

var guestName = prompt('What is your name?');

if (guestList.includes(guestName)) {
  alert('Welcome ' + guestName)
} else {
  alert('Sorry, you are not on the list.')
}