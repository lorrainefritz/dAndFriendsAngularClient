import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SpellCastingOutcome} from "../../model/spell-casting-outcome";
import {AuthLoginInfo} from "../../model/auth-login-info";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

   
}
