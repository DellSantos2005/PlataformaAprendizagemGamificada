document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".alternativas button");
    const correta = "Funções pequenas e bem nomeadas";
    const aviso = document.querySelector(".aviso");
    const idStorage = "desafio-tematico";
    const eventoAtual = "semana-codigo-limpo"; // pode mudar para novos eventos
  
    if (localStorage.getItem(idStorage) === eventoAtual) {
      aviso.textContent = "✅ Você já participou deste desafio.";
      botoes.forEach(btn => btn.disabled = true);
      return;
    }
  
    botoes.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === correta) {
          btn.style.backgroundColor = "green";
          adicionarXp(100); // valor especial por ser temático
          aviso.textContent = "🎉 Parabéns! Você ganhou 100 XP!";
        } else {
          btn.style.backgroundColor = "darkred";
          aviso.textContent = "❌ Resposta incorreta.";
        }
  
        botoes.forEach(b => b.disabled = true);
        localStorage.setItem(idStorage, eventoAtual);
      });
    });
  });