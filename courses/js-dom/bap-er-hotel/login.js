document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  // get user password
  const emailPassword = document.getElementById("user-password");
  const userPassword = emailPassword.value;
   console.log(userPassword);
   
   if (userEmail == `mehedihasanhimel89@gamil.com` && userPassword == `ulululu`) {
      window.location.href = './banking.html'
   } 
});

