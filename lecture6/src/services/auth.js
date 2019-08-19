const STORAGE_KEY = "@auth-token";

class Auth {
  _authenticated = false;
  _cbs = [];

  constructor() {
    this.signInSilently();
  }

  onStateChange = cb => {
    this._cbs.push(cb);
    return () => {
      this._cbs = this._cbs.filter(cb);
    };
  };

  get authenticated() {
    return this._authenticated;
  }

  set authenticated(value) {
    this._authenticated = value;
    this._cbs.forEach(cb => cb(value));
    localStorage.setItem(STORAGE_KEY, value);
  }

  signInSilently = () => {
    return Promise.resolve().then(() => {
      this.authenticated = localStorage.getItem(STORAGE_KEY) === "true";
    });
  };

  signIn = () => {
    return Promise.resolve(Math.random()) // emulate api request
      .then(() => {
        this.authenticated = true;
      });
  };

  signOut = () => {
    return Promise.resolve().then(() => {
      this.authenticated = false;
    });
  };
}

export default new Auth();
