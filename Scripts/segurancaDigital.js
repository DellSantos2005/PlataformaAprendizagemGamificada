document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".alternativas button");
    const correta = "Utilizar autenticação de dois fatores";
    const aviso = document.querySelector(".aviso");
    const idStorage = "desafio-seguranca";
    const eventoAtual = "semana-seguranca-digital";
  
    if (localStorage.getItem(idStorage) === eventoAtual) {
      aviso.textContent = "✅ Você já participou deste desafio.";
      botoes.forEach(btn => btn.disabled = true);
      return;
    }
  
    botoes.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === correta) {
          btn.style.backgroundColor = "green";
          adicionarXp(100);
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