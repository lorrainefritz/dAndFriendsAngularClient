import { Injectable } from '@angular/core';
import {CookieOptions} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private cookieService : CookieOptions) { }




}
