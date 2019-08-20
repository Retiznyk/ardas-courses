const STORAGE_KEY = "@auth-token";

class Auth {
  _authorized = false;
  _cbs = [];

  constructor() {
    this.signInSilently();
  }

  get authorized() {
    return this._authorized;
  }

  set authorized(value) {
    this._authorized = value;

    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }

    this._cbs.forEach(cb => cb(value));
  }

  onAuthStateChange = cb => {
    this._cbs.push(cb);
    return () => this._cbs.filter(c => c === cb);
  };

  signInSilently() {
    return Promise.resolve().then(() => {
      const value = localStorage.getItem(STORAGE_KEY);
      this.authorized = value;
    });
  }

  signIn(credentials) {
    return new Promise(resolve => {
      setTimeout(() => resolve(Math.random()), 1000);
    }).then(token => (this.authorized = token));
  }

  signOut() {
    return Promise.resolve().then(() => (this.authorized = false));
  }
}

export default new Auth();
