// Função para definir um cookie com nome, valor e duração em segundos
function setCookie(name, value, seconds) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (seconds * 1000)); // Converte segundos para milissegundos
  document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  console.log("Cookie após set:", document.cookie); // Verifica se o cookie foi armazenado
}

// Função para verificar credenciais e redirecionar com base no usuário
function handleLogin(username, password) {
  const userCredentials = {
    victor: { password: "oioi", cookieValue: "authenticated-victor", redirectUrl: "ola_victor.html" },
    felipe: { password: "tigrinhosimulator123", cookieValue: "authenticated-felipe", redirectUrl: "ola_felipe.html" },
    nicolas: { password: "jogodogatinho", cookieValue: "authenticated-nicolas", redirectUrl: "ola_nicolas.html" },
    diego: { password: "brasil", cookieValue: "authenticated-diego", redirectUrl: "ola_diego.html" }
  };

  const user = userCredentials[username];
  if (user && user.password === password) {
    setCookie("authToken", user.cookieValue, 5); // Define o cookie com 30 segundos de validade
    console.log("Cookie definido:", document.cookie); // Verifica o cookie após ser criado
    window.location.href = user.redirectUrl; // Redireciona para a página do usuário
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

// Evento de submissão do formulário
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Previne o envio do formulário
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  handleLogin(username, password); // Chama a função de verificação de login
});