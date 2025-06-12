document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailError = document.getElementById("email-error");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    emailError.style.display = "block"; 
    return;
  } else {
    emailError.style.display = "none";
  }

  if (password === "") {
    alert("Please enter your password.");
    return;
  }

  alert("Login Successful");
});
