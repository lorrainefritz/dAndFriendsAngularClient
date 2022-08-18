import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login-service/login.service";
import {Login} from "../../model/login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user?:User;

  constructor(private loginService:LoginService,private cookieService : CookieService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm =new FormGroup({
    username: new FormControl('',[Validators.required, Validators.min(3),Validators.maxLength(65)]),
    password: new FormControl('',[Validators.required, Validators.min(3),Validators.maxLength(65)])
  });

  get l(){
    return this.loginForm.controls;
  }

  submit(){
    console.log(this.loginForm.value)
  }
  logAUser(login: Login){
    this.loginService.loginAUser(login).subscribe((response:string[])=>{
      console.log(response);
      this.cookieService.set('tokenDandFriends', response[0]);
      this.cookieService.set('roleDandFriends', response[1]);
      this.cookieService.set('pseudoDandFriends', response[2]);
      this.router.navigateByUrl('/');
      });
  }


}
