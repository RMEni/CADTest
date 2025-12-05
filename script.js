const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

// Example credentials
const validUsername = "admin";
const validPassword = "1234";

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === validUsername && password === validPassword) {
    alert("Login successful!");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
