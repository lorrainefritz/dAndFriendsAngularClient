import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {SpellFullDescription} from "../../model/spell-full-description";
import {SpellShortDescription} from "../../model/spell-short-description";
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";
import {CookieService} from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class SpellService {

  constructor(private http: HttpClient) {
  }

  getAllSpellsFullDescription(): Observable<SpellFullDescription[]> {
    let headers = new HttpHeaders();
    let host = environment.host;
    let url = host+"/spells"
    return this.http.get<SpellFullDescription[]>(url,{headers: headers,withCredentials: true});
  }

  getASpellDescription(id: number): Observable<SpellFullDescription> {
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<SpellFullDescription>(host + "/spells/get/" + id,{headers: headers,withCredentials: true});
  }

  findSpellsForACustomTypeOfSpell(customTypeOfSpellId: number): Observable<SpellShortDescription[]> {
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.get<SpellShortDescription[]>(host + "/spells/byCustomTypeOfSpell/" + customTypeOfSpellId,{headers: headers,withCredentials: true});
  }

  public deleteASpellById(id: number):Observable<void>{
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.delete<void>(host + "/spells/delete/" + id,{headers: headers,withCredentials: true});
  }

  public addASpell(spell:SpellFullDescription):Observable<SpellFullDescription>{
    let headers = new HttpHeaders();
    let host = environment.host;
    return this.http.post<SpellFullDescription>(host + "/spells/add",spell,{headers: headers,withCredentials: true});
  }


}
