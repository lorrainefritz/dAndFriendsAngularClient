import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AdditionalRandomOutcome} from "../../model/additional-random-outcome";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdditionnalRandomOutcomeServiceService {

  constructor(private http:HttpClient) {
  }

  getAnAdditionalRandomOutcome():Observable<AdditionalRandomOutcome>{
    let headers = new HttpHeaders();
    let host = environment.host
    return this.http.get<AdditionalRandomOutcome>(host+"/spellCastingOutcomes/additionalRandomOutcomes/generate",{headers: headers,withCredentials: true});
  }
}
