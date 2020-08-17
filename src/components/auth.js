class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    setLogin(cb) {
      this.authenticated = true;
      cb();
    }
  
    setLogout(cb) {
      this.authenticated = false;
      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  