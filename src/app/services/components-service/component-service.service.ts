import { Injectable } from '@angular/core';
import {ComponentOfSpell} from "../../model/component-of-spell";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  constructor(private http: HttpClient) { }

  public getAllComponents():Observable<ComponentOfSpell[]>{
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<ComponentOfSpell[]>(host+"/components",{headers: headers,withCredentials: true});
  }
}
