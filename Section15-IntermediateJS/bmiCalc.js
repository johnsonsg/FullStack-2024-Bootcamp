function bmiCalculator(weight, height) {
  // var bmi = Math.floor(weight / (height * height));
  // Use, raise number to a power in JS instead (Google)
  // syntax: Math.pow(base, exponent) = base: the base number, exponent: the exponent to raise the base.
  // var bmi = weight / Math.pow(height, 2);
  // return Math.round(bmi);
  var bmi = Math.round(weight / Math.pow(height, 2)); // Math.pow(x,y) = x raised to the power of y
    // example: Math.pow(2,3) = 2^3 = 8
    // 2 * 2 * 2 = 8 (2 raised to the power of 3)

    if (bmi < 18.5) {
        return ("Your BMI is " + bmi + ", so you are underweight.")
    } 
    if (bmi > 18.5 && bmi <= 24.9) {
        return ("Your BMI is " + bmi + ", so you have a normal weight.")
    }
    if (bmi > 24.9) {
        return ("Your BMI is " + bmi + ", so you are overweight.")
    }
}

bmiCalculator(65, 1.8); // Your BMI is 20, so you have a normal weight.
