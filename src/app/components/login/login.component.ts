import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token-service/token.service";
import {SpellFullDescription} from "../../model/spell-full-description";
import {FormGroup, Validators} from "@angular/forms";
import {AuthLoginInfo} from "../../model/auth-login-info";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authLoginInfo: AuthLoginInfo= new AuthLoginInfo('','');

  constructor(private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  authLoginInfoForm = new FormGroup({
    userLogin: new FormGroup('', [Validators.required, Validators.min(1)]),
    pass: new FormGroup('', [Validators.required, Validators.min(1)])
  });


  get f() {
    return this.authLoginInfoForm.controls;
  }

  submit() {
    console.log(this.authLoginInfoForm.value);
    alert(this.authLoginInfoForm.value);
  }

  public logAUserOfApp(authLoginInfo: AuthLoginInfo) {
    alert(authLoginInfo.pass + authLoginInfo.userLogin);
    /*this.logAUser(authLoginInfos)*/
  }

}
