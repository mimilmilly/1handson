const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const loginButton = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

loginButton.addEventListener("click", function(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    alert("Login successfully! (demo)");
  }
});

togglePassword.addEventListener("click", function() {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});
