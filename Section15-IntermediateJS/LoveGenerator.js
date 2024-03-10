var yourName = prompt('What is your name?');
var theirName = prompt('What is their name?');

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 80) {
  alert(`${yourName} and ${theirName}'s love score is ${loveScore}%. You love each other like Kanye loves Kanye.`);
} 
if (loveScore > 32 && loveScore <= 80) {
    alert(`${yourName} and ${theirName}'s love score is ${loveScore}%.`);
} 
if (loveScore <= 32){
    alert(`${yourName} and ${theirName}'s love score is ${loveScore}%. You go together like oil and water.`);
}

// alert(`${yourName} and ${theirName}'s love score is ${loveScore}%.`)