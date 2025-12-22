


const perguntas = [
  {
    pergunta: "Qual linguagem usamos no backend da plataforma?",
    alternativas: ["JavaScript", "Python", "C#", "Ruby"],
    correta: "Python"
  },
  {
    pergunta: "Qual dessas é uma linguagem de marcação?",
    alternativas: ["Python", "CSS", "HTML", "Java"],
    correta: "HTML"
  },
  {
    pergunta: "Qual banco de dados é relacional?",
    alternativas: ["MongoDB", "MySQL", "Redis", "Firebase"],
    correta: "MySQL"
  }
];

let rodada = 0;
let pontuacoes = { jogador1: 0, jogador2: 0 };
let vezDoJogador1 = true;

const perguntaElem = document.getElementById("pergunta");
const opcoesElem = document.getElementById("opcoes");
const msgElem = document.getElementById("mensagem");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

function carregarPergunta() {
  const atual = perguntas[rodada];
  perguntaElem.textContent = atual.pergunta;
  opcoesElem.innerHTML = "";

  atual.alternativas.forEach((alt) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => verificarResposta(alt);
    const li = document.createElement("li");
    li.appendChild(btn);
    opcoesElem.appendChild(li);
  });

  msgElem.textContent = `🎮 Vez do ${vezDoJogador1 ? "Jogador 1" : "Jogador 2"}`;
  btnProxima.style.display = "none";
}

function verificarResposta(resposta) {
  const correta = perguntas[rodada].correta;
  const jogador = vezDoJogador1 ? "jogador1" : "jogador2";

  if (resposta === correta) {
    pontuacoes[jogador]++;
    document.getElementById(`pontos${vezDoJogador1 ? "1" : "2"}`).textContent = pontuacoes[jogador];
    msgElem.textContent = `✅ Resposta correta! Ponto para ${vezDoJogador1 ? "Jogador 1" : "Jogador 2"}`;
  } else {
    msgElem.textContent = `❌ Resposta errada. Nenhum ponto.`;
  }

  document.querySelectorAll("#opcoes button").forEach(btn => btn.disabled = true);
  btnProxima.style.display = "inline-block";
}

btnProxima.onclick = () => {
  rodada++;
  vezDoJogador1 = !vezDoJogador1;

  if (rodada >= perguntas.length) {
    finalizarJogo();
  } else {
    carregarPergunta();
  }
};

function finalizarJogo() {
  perguntaElem.textContent = "🏁 Fim do Jogo!";
  opcoesElem.innerHTML = "";
  btnProxima.style.display = "none";
  btnReiniciar.style.display = "inline-block";

  if (pontuacoes.jogador1 > pontuacoes.jogador2) {
    msgElem.textContent = "🎉 Jogador 1 venceu!";
  } else if (pontuacoes.jogador2 > pontuacoes.jogador1) {
    msgElem.textContent = "🎉 Jogador 2 venceu!";
  } else {
    msgElem.textContent = "🤝 Empate!";
  }
}

btnReiniciar.onclick = () => {
  rodada = 0;
  pontuacoes = { jogador1: 0, jogador2: 0 };
  vezDoJogador1 = true;
  document.getElementById("pontos1").textContent = 0;
  document.getElementById("pontos2").textContent = 0;
  btnReiniciar.style.display = "none";
  carregarPergunta();
};

// Iniciar
carregarPergunta();
