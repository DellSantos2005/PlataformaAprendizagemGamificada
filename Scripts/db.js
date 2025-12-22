const DB_KEY = "plataforma_db";
const LOGADO_KEY = "usuario_logado";

function iniciarDB() {
  if (!localStorage.getItem(DB_KEY)) {
    const hoje = new Date().toISOString().split("T")[0];

    const db = {
      usuarios: [
        {
          id: 1,
          nome: "Eliedson Silva",
          nickname: "eli.tech",
          senha: "123456",
          curso: "TI",
          xp: 0,
          nivel: 1,
          diasSeguidos: 1,
          primeiroLogin: hoje,
          ultimoLogin: hoje,
          progresso: {}
        }
      ]
    };

    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }
}

iniciarDB();

function getDB() {
  return JSON.parse(localStorage.getItem(DB_KEY));
}

function salvarDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function loginUsuario(nickname, senha) {
  const db = getDB();
  const usuario = db.usuarios.find(
    u => u.nickname === nickname && u.senha === senha
  );

  if (!usuario) return null;

  localStorage.setItem(LOGADO_KEY, usuario.id);
  atualizarStreak(usuario);
  salvarDB(db);
  return usuario;
}

function getUsuarioLogado() {
  const id = localStorage.getItem(LOGADO_KEY);
  if (!id) return null;

  const db = getDB();
  return db.usuarios.find(u => u.id == id);
}

function atualizarStreak(usuario) {
  const hoje = new Date().toISOString().split("T")[0];
  const ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);

  if (usuario.ultimoLogin === ontem.toISOString().split("T")[0]) {
    usuario.diasSeguidos++;
  } else if (usuario.ultimoLogin !== hoje) {
    usuario.diasSeguidos = 1;
  }

  usuario.ultimoLogin = hoje;
}

function adicionarXP(valor) {
  const db = getDB();
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  usuario.xp += valor;
  usuario.nivel = Math.floor(usuario.xp / 100) + 1;
  salvarDB(db);
}

function concluirAssunto(assuntoId) {
  const db = getDB();
  const usuario = getUsuarioLogado();
  if (!usuario) return;

  usuario.progresso[assuntoId] = true;
  salvarDB(db);
}
