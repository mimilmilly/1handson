document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value.trim();
  const password = e.target[1].value.trim();

  if (email && password) {
    alert("Login Successful");
  } else {
    alert("Please fill in all fields.");
  }
});
