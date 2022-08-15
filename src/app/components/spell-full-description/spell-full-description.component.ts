import {Component, OnInit} from '@angular/core';
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellFullDescription} from "../../model/spell-full-description";
import {Router} from "@angular/router";

@Component({
  selector: 'app-spell-full-description',
  templateUrl: './spell-full-description.component.html',
  styleUrls: ['./spell-full-description.component.css']
})
export class SpellFullDescriptionComponent implements OnInit {
  spellFullDescription?: SpellFullDescription[];

  constructor(private spellService: SpellService, private router: Router) {
  }

  ngOnInit() {
    this.onGetAllSpellsFullDescription();
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
        /*this.router.navigateByUrl("/spells");*/
        console.log(response);
      });
    }
  }

  editASpell(spell: SpellFullDescription) {
    this.router.navigateByUrl("/spellEdit/"+spell.id);
  }
}
