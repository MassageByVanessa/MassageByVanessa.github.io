function validatePassword() {
  let password = document.getElementById("PasswordInput").value // creates a variable that gets the answer entered by the user
  let confirmPassword = document.getElementById("ConfirmPasswordInput").value
  let passwordLength = password.length; // creates a variable for the password length - this will be used for the validation.
  let UpperCase = /[A-Z]/.test(password);
  let LowerCase = /[a-z]/.test(password);
  let Numbers = /[0-9]/.test(password);
  let Space = /\s/.test(password);
  
  if (password == "") { // is the password equal to nothing?
    alert("error! Password is equal to nothing!");
    return false;
  }
  else if (passwordLength < 8) { // is the password less than 8 characters?
    alert("password is too short!");
    return false;
  }
  else if (!UpperCase) {
    alert("Password needs to contain an uppercase letter!");
    return false;
  }
  else if (!LowerCase) {
    alert("Password needs to contain a lowercase letter!");
    return false;
  }
    
  else if (!Numbers) {
    alert("Password needs to contain a number!");
    return false
  }
  else if (Space) {
    alert("Password cannot contain spaces!")
    return false;
  }
  else if (password != confirmPassword) {
    alert("Password fields do not match!")
    return false;
  }
  else {
    return true;
  }
}
