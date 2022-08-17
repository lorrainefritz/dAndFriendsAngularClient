import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomTypeOfSpellServiceService {

  constructor(private http:HttpClient) {
  }
  getAllCustomTypeOfSpells():Observable<CustomTypeOfSpell[]>{
    let headers = new HttpHeaders();
    let host=environment.host;
    return this.http.get<CustomTypeOfSpell[]>(host+"/customTypeOfSpells",{headers: headers,withCredentials: true});
  }
}
