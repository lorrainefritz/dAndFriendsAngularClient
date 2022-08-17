import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SpellCastingOutcome} from "../../model/spell-casting-outcome";

@Injectable({
  providedIn: 'root'
})
export class SpellCastingOutcomeServiceService {

  constructor(private http:HttpClient) { }

  getAllSpellCastingOutcomes():Observable<SpellCastingOutcome[]>{
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<SpellCastingOutcome[]>(host + "/spellCastingOutcomes",{headers: headers,withCredentials: true});
  }

  getASpellCastingOutcome(spellWasASuccess:boolean):Observable<SpellCastingOutcome> {
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<SpellCastingOutcome>(host + "/spellCastingOutcomes/generate/"+spellWasASuccess,{headers: headers,withCredentials: true});
  }


  getASpellCastingOutcomeById(id:number):Observable<SpellCastingOutcome> {
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<SpellCastingOutcome>(host + "/spellCastingOutcomes/get/"+id,{headers: headers,withCredentials: true});
  }

}
