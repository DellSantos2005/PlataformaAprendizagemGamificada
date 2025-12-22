document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".alternativas button");
  const correta = "for/while";
  const aviso = document.querySelector(".aviso");

  if (desafioDiarioConcluido()) {
    aviso.textContent = "✅ Você já concluiu o desafio de hoje!";
    botoes.forEach(b => b.disabled = true);
    return;
  }

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.textContent === correta) {
        btn.style.backgroundColor = "green";
        concluirDesafioDiario(50);
        aviso.textContent = "🎉 Você ganhou 50 XP!";
      } else {
        btn.style.backgroundColor = "darkred";
        aviso.textContent = "❌ Resposta incorreta.";
      }

      botoes.forEach(b => b.disabled = true);
    });
  });
});