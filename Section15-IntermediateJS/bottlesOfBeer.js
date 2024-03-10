// 99 Bottles of beer on the wall song
// 99 bottles of beer on the wall, 99 bottles of beer
// Take one down and pass it around, 98 bottles of beer on the wall

function bottlesOfBeer() {
    let bottles = 99;
    while (bottles > 0) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer");
        console.log("Take one down and pass it around, " + (bottles - 1) + " bottles of beer on the wall");
        bottles--;
    }
}
