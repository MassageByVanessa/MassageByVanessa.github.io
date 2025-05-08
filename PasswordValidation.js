function validatePassword() {
  password = document.getElementById("PasswordInput").value // creates a variable that gets the answer entered by the user
  if (password == "") { // is the password equal to nothing?
    alert("error!")
    return false;
  }
}

function alertTesting() {
  alert("error!"); 
}
