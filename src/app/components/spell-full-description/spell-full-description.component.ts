import {Component, OnInit} from '@angular/core';
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellFullDescription} from "../../model/spell-full-description";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-spell-full-description',
  templateUrl: './spell-full-description.component.html',
  styleUrls: ['./spell-full-description.component.css']
})
export class SpellFullDescriptionComponent implements OnInit {
  spellFullDescription?: SpellFullDescription[];

  constructor(private spellService: SpellService, private router: Router,private cookieService:CookieService) {
  }

  ngOnInit() {
    this.onGetAllSpellsFullDescription();
  }

  roleIsMJ(): boolean {
    const role: string = this.cookieService.get('roleDandFriends');
    let roleIsMJ: boolean = false;
    if (role=="ROLE_MJ"){
      roleIsMJ = true;
    }
    return roleIsMJ;
  }


  onGetAllSpellsFullDescription() {
    this.spellService.getAllSpellsFullDescription().subscribe(data => {
      this.spellFullDescription = data;
    })
  }

  deleteASpellById(id: number) {
    let conf = confirm("Etes vous sûre de vouloir supprimer ce sort?");
    if (conf == true) {
      this.spellService.deleteASpellById(id).subscribe((response: void) => {
        console.log(response);
      });
      this.reloadComponent();
    }
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/spells']);
  }

  editASpell(spell: SpellFullDescription) {
    this.router.navigateByUrl("/spellEdit/"+spell.id);
  }
}
