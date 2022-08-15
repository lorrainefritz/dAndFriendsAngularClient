import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SpellFullDescription} from "../../model/spell-full-description";
import {SpellShortDescription} from "../../model/spell-short-description";
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";


@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) {
  }

  getAllSpellsFullDescription(): Observable<SpellFullDescription[]> {
    let host = environment.host;
    return this.http.get<SpellFullDescription[]>(host + "/spells");
  }

  getASpellDescription(id: number): Observable<SpellFullDescription> {
    let host = environment.host;
    return this.http.get<SpellFullDescription>(host + "/spells/get/" + id);
  }

  findSpellsForACustomTypeOfSpell(customTypeOfSpellId: number): Observable<SpellShortDescription[]> {
    let host = environment.host;
    return this.http.get<SpellShortDescription[]>(host + "/spells/byCustomTypeOfSpell/" + customTypeOfSpellId);
  }

  public deleteASpellById(id: number):Observable<void>{
    let host = environment.host;
    alert(id)
    return this.http.delete<void>(host + "/spells/delete/" + id);
  }

  public addASpell(spell:SpellFullDescription):Observable<SpellFullDescription>{
    let host = environment.host;
    return this.http.post<SpellFullDescription>(host + "/spells/add",spell);
  }
  public editASpell(spell:SpellFullDescription):Observable<SpellFullDescription>{
    let host = environment.host;
    return this.http.post<SpellFullDescription>(host + "/spells/edit",spell);
  }

}
