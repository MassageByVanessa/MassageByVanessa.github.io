function validatePassword() {
  password = document.getElementById("PasswordInput").value // creates a variable that gets the answer entered by the user
  passwordLength = password.length; // creates a variable for the password length - this will be used for the validation.
  if (password == "") { // is the password equal to nothing?
    alert("error!");
    return false;
  }
  else if (passwordLength < 8) { // is the password less than 8 characters?
    alert("password is too short!");
    return false;
  }
}
