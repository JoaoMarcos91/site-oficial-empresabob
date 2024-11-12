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
  if (username === "felipe" && password === "tigrinhosimulator123") {
    setCookie("authToken", "authenticated-felipe", 10); // Cookie válido por 10 minutos
    window.location.href = "ola_felipe.html";
  } else if (username === "nicolas" && password === "jogodogatinho") {
    setCookie("authToken", "authenticated-nicolas", 10); // Cookie válido por 10 minutos
    window.location.href = "ola_nicolas.html";   
  } else {
    alert("Usuário ou senha incorretos!");
  }
});