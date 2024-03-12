/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from 'inquirer';
import qr from 'qr-image';

// fs.writeFile('message.txt', 'Hello NodeJS', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'URL', 
        message: 'Enter the URL you want to convert to a QR code'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
   // console.log(answers)
   const url = answers.URL;
   var qr_png = qr.image(url);
   qr_png.pipe(fs.createWriteStream('qr_img.png'));   

   fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
   })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });