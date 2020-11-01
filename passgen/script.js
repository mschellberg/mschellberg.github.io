// Assignment code here
function createRandomCharacter(randomStr, begin, end) {
  var randomValue = begin + Math.floor(Math.random() * (end - begin))
  return (randomStr + String.fromCharCode(randomValue))
}

function createRandomSpecialCharacter(randomStr) {
  var specialCharacters = ["?", "!", "@", "%", "#"]
  var index = Math.floor(Math.random() * specialCharacters.length)
  return randomStr + specialCharacters[index]
}

function getRandomString(length, useUpper, useLower, useNumber, useSpecialCharacter) {
  var randomStr = ""
  var begin = 0
  var end = 0
  for (ii = 0; ii < length; ii++) {
    if (useUpper) {
      var begin = 65
      var end = 91
      randomStr = createRandomCharacter(randomStr, begin, end);
    }
    if (useLower) {
      var begin = 97
      var end = 123
      randomStr = createRandomCharacter(randomStr, begin, end);
    }
    if (useNumber) {
      var begin = 48
      var end = 58
      randomStr = createRandomCharacter(randomStr, begin, end);
    }
    if (useSpecialCharacter) {
      randomStr = createRandomSpecialCharacter(randomStr)

    }
  }
  return randomStr.substring(0, length)
}

function generatePassword() {
  var password = "";
  var passwordLengthString = window.prompt("How many characters would you like your password to contain?");
  var passwordLength = parseInt (passwordLengthString);
// Validating password length 
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must be between 8 and 128 characters");
    return "No password generated";
  }
// Special Characters
  var specialCharacters = window.confirm("Click OK to confirm including special characters.");
// Numeric Numbers
  var numbers = window.confirm("Click OK to confirm including numeric characters");
// Uppercase
  var upperCase = window.confirm("Click OK to confirm including uppercase characters.");  
// Lowercase 
  var lowerCase = window.confirm("Click OK to confrim including lowercase characters.");
    
password = getRandomString(passwordLength, upperCase, lowerCase, numbers, specialCharacters); //Needs to be the same order as the function above
return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
