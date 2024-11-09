// script.js

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulário
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validação do usuário e senha
    if (username === "felipe" && password === "tigrinhosimuator123") {
      window.location.href = "ola_felipe.html";
    } else if (username === "nicolas" && password === "2") {
      window.location.href = "ola_nicolas.html";
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });
  