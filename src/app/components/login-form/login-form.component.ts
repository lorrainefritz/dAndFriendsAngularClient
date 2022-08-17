import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login-service/login.service";
import {Login} from "../../model/login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {User} from "../../model/user";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user?:User;

  constructor(private loginService:LoginService,private cookieService : CookieService) { }

  ngOnInit(): void {
  }

  loginForm =new FormGroup({
    username: new FormControl('',[Validators.required, Validators.min(1)]),
    password: new FormControl('',[Validators.required, Validators.min(2)])
  });

  get l(){
    return this.loginForm.controls;
  }

  submit(){
    console.log(this.loginForm.value)
    alert(this.loginForm.value);
  }
  logAUser(login: Login){
    alert(login.username +login.password);
    this.loginService.loginAUser(login).subscribe((response:string[])=>{
      alert(response);
      alert(response[0]);
      alert(response[1]);
      alert(response[2]);
      console.log(response);
      this.cookieService.set('tokenDandFriends', response[0]);
      this.cookieService.set('roleDandFriends', response[1]);
      this.cookieService.set('pseudoDandFriends', response[2]);

      });
  }


}
