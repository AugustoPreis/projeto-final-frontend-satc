const USER_KEY = 'msystem_user_info';

export function isValidUser(user) {
  if (typeof user === 'string') {
    try {
      user = JSON.parse(user);
    } catch {
      return false;
    }
  }

  if (typeof user !== 'object' || user === null) {
    return false;
  }

  return Object.keys(user).length > 0;
}

export function getUser() {
  /*
    Retorna um objeto com o usuário salvo no localStorage
    Caso não encontrar retorna sempre null
  */
  try {
    const item = localStorage.getItem(USER_KEY);

    if (item && item != 'undefined') {
      return JSON.parse(item);
    }

    return null;
  } catch {
    return null;
  }
}

/*
  os metodos do objeto auth precisam ser declarados como "function"
  Arrow functions perdem a referencia do "this"
*/
const auth = {
  //objeto contendo o usuário logado
  user: getUser(),

  //verifica se tem algum usuário logado
  isAuthenticated: function () {
    const { user } = this;

    return isValidUser(user);
  },

  //realiza o login
  login: function (user) {
    if (!isValidUser(user)) {
      return;
    }

    let stringUser = user;

    if (typeof stringUser === 'object') {
      stringUser = JSON.stringify(stringUser);
    }

    localStorage.setItem(USER_KEY, stringUser);
  },

  //realiza o logout
  logout: function () {
    if (!isValidUser(this.user)) {
      return;
    }

    this.user = null;
    localStorage.removeItem(USER_KEY);
  },
}

export default auth;