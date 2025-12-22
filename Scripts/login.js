document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.querySelector(".login");

  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll(".input-box input");
    const nickname = inputs[0].value.trim();
    const senha = inputs[1].value.trim();

    if (!nickname || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    const usuario = loginUsuario(nickname, senha);

    if (!usuario) {
      alert("Nickname ou senha inválidos.");
      return;
    }

    alert("Login realizado com sucesso!");
    window.location.href ="pages/Principal/Home.html";
  });
});




