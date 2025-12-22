document.addEventListener("DOMContentLoaded", () => {
  if (!getUsuarioLogado()) {
    window.location.href = "/index.html";
  }
});