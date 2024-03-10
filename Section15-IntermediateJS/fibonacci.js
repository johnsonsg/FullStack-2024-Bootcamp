// Fionacci Series Generator

function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            // output.push(output[0] + output[1]); // [0, 1, 1]
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

console.log(fibonacciGenerator(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// With a for loop
// function fibonacciGenerator(n) {
// // use a for loop to generate the fibonacci series
//     var output = [];

//     for (var i = 0; i < n; i++) {
//         if (i === 0) {
//             output.push(0);
//         } else if (i === 1) {
//             output.push(1);
//         } else {
//             output.push(output[i - 2] + output[i - 1]);
//         }
//     }
//     return output;
// }

// console.log(fibonacciGenerator(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// With a while loop
// function fibonacciGenerator(n) {
// // use a while loop to generate the fibonacci series
//     var output = [];
//     var i = 0;
//     while (i < n) {
//         if (i === 0) {
//             output.push(0);
//         } else if (i === 1) {
//             output.push(1);
//         } else {
//             output.push(output[i - 2] + output[i - 1]);
//         }
//         i++;
//     }
//     return output;
// }

// console.log(fibonacciGenerator(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]