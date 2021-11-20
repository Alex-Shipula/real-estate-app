const AuthLocalStorage = {
    login(token:string):void {
      localStorage.setItem('token', token);
    },
    getToken():string {
      return localStorage.getItem('token');
    },
    logout():void {
      localStorage.clear();
    },
  };
  
  export default AuthLocalStorage;