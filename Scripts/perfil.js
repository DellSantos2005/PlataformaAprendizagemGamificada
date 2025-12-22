document.addEventListener("DOMContentLoaded", () => {
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  document.getElementById("nome-usuario").textContent = usuario.nome;
  document.getElementById("nickname-usuario").textContent = usuario.nickname;
  document.getElementById("primeiro-login").textContent =
    "Primeiro Login: " + usuario.primeiroLogin;
  document.getElementById("xp-total").textContent = usuario.xp + " XP";
  document.getElementById("nivel-usuario").textContent =
    "Nível " + usuario.nivel;
  document.getElementById("dias-seguidos").textContent =
    usuario.diasSeguidos;
});