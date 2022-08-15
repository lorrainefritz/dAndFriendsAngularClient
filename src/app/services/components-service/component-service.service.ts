import { Injectable } from '@angular/core';
import {ComponentOfSpell} from "../../model/component-of-spell";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  constructor(private http: HttpClient) { }

  public getAllComponents():Observable<ComponentOfSpell[]>{
    let host = environment.host;
    return this.http.get<ComponentOfSpell[]>(host+"/components");
  }
}
