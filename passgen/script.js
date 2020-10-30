function randomSpecialChar () {
  // example set of special chars as a string in no particular order
  var s = "!$%&?*@#";

  // generating a random index into the string and extracting the character at that position
  return s.substr(Math.floor(s.length*Math.random()), 1);
} 


// Assignment code here
function generatePassword() {
  var password = "";
  var passwordLengthString = window.prompt("How many character would you like your password to contain?");
  var passwordLength = parseInt (passwordLengthString);
// Validating password length 
  if (passwordLength < 8 || passwordLength > 20) {
    alert ("Password must be between 8 and 20 characters");
    return "no password generated";
  }
// Special Characters
  var specialCharacters = window.confirm("Click OK to confirm including special characters.");
    if (specialCharacters) {
    password = password + randomSpecialChar();
  }

// Numeric Numbers
  var numbers = window.confirm("Click OK to confirm including numeric characters");
    if (numbers) {
    password = password + Math.floor(Math.random() * 10);
}

// Uppercase
  var upperCase = window.confirm("Click OK to confrim including uppercase characters.");
    if (upperCase) {
    password = password + "M";
  }

// Lowercase 
  var lowerCase = window.confirm("Click OK to confrim including lowercase characters.");
    if (lowerCase) {
    password = password + "m";
  }

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
