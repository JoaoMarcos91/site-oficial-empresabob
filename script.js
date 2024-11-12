// script.js

function setCookie(name, value, minutes) {
  const date = new Date();
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio do formulário
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "victor" && password === "oioi") {
    setCookie("authToken", "authenticated-victor", 10);
    window.location.href = "ola_victor.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }