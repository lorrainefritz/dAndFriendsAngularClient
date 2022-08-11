import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SpellCastingOutcome} from "../../model/spell-casting-outcome";

@Injectable({
  providedIn: 'root'
})
export class SpellCastingOutcomeServiceService {

  constructor(private http:HttpClient) { }

  getAllSpellCastingOutcomes():Observable<SpellCastingOutcome[]>{
    let host = environment.host;
    return this.http.get<SpellCastingOutcome[]>(host + "/spellCastingOutcomes");
  }

  getASpellCastingOutcome(spellWasASuccess:boolean):Observable<SpellCastingOutcome> {
    let host = environment.host;
    return this.http.get<SpellCastingOutcome>(host + "/spellCastingOutcomes/generate/"+spellWasASuccess);
  }


  getASpellCastingOutcomeById():Observable<SpellCastingOutcome> {
    let host = environment.host;
    return this.http.get<SpellCastingOutcome>(host + "/spellCastingOutcomes/get/"+1);
  }

}
