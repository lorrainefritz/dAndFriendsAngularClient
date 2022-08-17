import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
pseudo?:string;
  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  tokenIsPresent(): boolean {
    const token: string = this.cookieService.get('tokenDandFriends');
    let tokenIsPresent: boolean = false;
    if (token.length>0){
      tokenIsPresent = true;
    }
    return tokenIsPresent;
  }
  pseudoIsPresent():boolean{
    const pseudo: string = this.cookieService.get('pseudoDandFriends');
    let tokenIsPresent: boolean = false;
    if (pseudo.length>0){
      tokenIsPresent = true;
      this.pseudo =pseudo;
    }
    return tokenIsPresent;
  }




  logout() {
    if(confirm("Voulez vous vous deconnecter?")){
      this.cookieService.delete('tokenDandFriends');
      this.cookieService.delete('roleDandFriends');
      this.cookieService.delete('pseudoDandFriends');

      alert("vous avez été déconnecté");
      this.router.navigateByUrl("/login");
    }

  }
}
