var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var alphabet = "qwertyuiopasdfghjklzxcvbnm";
  var numbers = "0123456789";
  var specialCharacters = "!@#$%^&*()~`,./><?;':[]{}-=_+";
// +window.promp feature allows us to convert strings into integers Link: https://stackoverflow.com/questions/38011247/prompt-vs-prompt-in-javascript
  var passwordLength = +window.prompt(
    "How many characters do you want your password to be (8-128)"
  );

  var confirmAlphabet = window.confirm("Do you want letters in your password?");
  var confirmLowercase = window.confirm("Do you want Lowercase Letters?");
  var confirmUppercase = window.confirm("Do you want Uppercase Letters?");
  var confirmNumbers = window.confirm("Do you want to include Numbers?");
  var confirmSpecial = window.confirm("Do you want Special Characters?");

  if (passwordLength >= 8 == passwordLength <= 128) {
    var chosenCharacters = "";

    // += ( meaning: X += Y is the same as  X = X+Y)
    if (confirmAlphabet) {
      if (confirmLowercase) {
        chosenCharacters += alphabet;
      }
      if (confirmUppercase) {
        chosenCharacters += alphabet.toUpperCase();
      }
    }
    if (confirmNumbers) {
      chosenCharacters += numbers;
    }
    if (confirmSpecial) {
      chosenCharacters += specialCharacters;
    }

    var generatedPassword = "";
    for (var x = 0; x < passwordLength; x++) {
      var randomIndex = Math.floor(Math.random() * chosenCharacters.length);
      generatedPassword += chosenCharacters.charAt(randomIndex);
    }

    return generatedPassword;
  } else {
    window.alert("Must choose a password length between 8 and 128.");
    return "error";
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
