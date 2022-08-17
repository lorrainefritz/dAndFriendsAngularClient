import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../../model/login";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient ) {

  }
  public loginAUser(login:Login){
    let host= environment.host;
    return this.http.post<string[]>(host+ '/login/?username='+login.username+'&password='+login.password,{})
  }

}
