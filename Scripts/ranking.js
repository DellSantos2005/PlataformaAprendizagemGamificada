document.addEventListener("DOMContentLoaded", () => {
  const tipo = window.location.href.includes("curso") ? "curso" : "campus";
  const ranking = gerarRanking(tipo);

  const container =
    document.querySelector(".ranking-content") ||
    document.getElementById("ranking-container");

  container.innerHTML = "";

  ranking.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("ranking-item");

    div.innerHTML = `
      <span>${item.posicao}º</span>
      <span>${item.nome} (${item.curso})</span>
      <span>${item.xp} XP</span>
    `;

    container.appendChild(div);
  });
});