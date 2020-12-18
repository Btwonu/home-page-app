import request from './request';

const apiKey = 'key';
const endpoints = {
  register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
  login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
};

export default {
  async login(formData) {
    let res = await request.post(endpoints.login, formData);

    localStorage.setItem('auth', JSON.stringify(res));
    return res;
  },
  async register(formData) {
    let res = await request.post(endpoints.register, formData);
    if (res.error) {
      return res;
    }

    localStorage.setItem('auth', JSON.stringify(res));
    return res;
  },
  logout() {
    localStorage.removeItem('auth');
  },
  getUserInfo() {
    try {
      let data = JSON.parse(localStorage.getItem('auth'));
      return {
        loggedIn: Boolean(data.idToken),
        ...data,
      };
    } catch (error) {
      return {
        loggedIn: false,
      };
    }
  },
};
