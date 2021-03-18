// Accessing input fields and getting values
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

// Accessing signup button
let signupbtn = document.getElementById("btnsignup");

// users object
users = {};

// click event on signup btn
if (signupbtn) {
  signupbtn.addEventListener("click", function () {
    //   console.log("Clicked");

    if (username.value != "" && email.value != "" && password.value != "") {
      users.name = username.value;
      users.mail = email.value;
      users.pass = password.value;

      alert("Registration Successfull!");
    }
  });
}
