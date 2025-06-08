document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  // ลองทำงานง่ายๆ (ตัวอย่าง)
  if (email && password) {
    alert(`Email: ${email}\nPassword: ${password}`);
  } else {
    alert("Please fill in all fields.");
  }
});
