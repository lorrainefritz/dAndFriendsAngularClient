export class AuthLoginInfo {
  userLogin: string;
  pass: string;


  constructor(userLogin: string, pass: string) {
    this.userLogin = userLogin;
    this.pass = pass;
  }
}
