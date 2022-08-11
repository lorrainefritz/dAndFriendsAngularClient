import {Component, OnInit} from '@angular/core';
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";
import {CustomTypeOfSpellServiceService} from "../../services/CustomTypeOfSpell/custom-type-of-spell-service.service";
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellShortDescription} from "../../model/spell-short-description";
import {SpellCastingOutcome} from "../../model/spell-casting-outcome";
import {SpellFullDescription} from "../../model/spell-full-description";

@Component({
  selector: 'app-custom-type-of-spell',
  templateUrl: './custom-type-of-spell.component.html',
  styleUrls: ['./custom-type-of-spell.component.css']
})
export class CustomTypeOfSpellComponent implements OnInit {
  customTypeOfSpell?: CustomTypeOfSpell[];
  spellsShortDescription?: SpellShortDescription[];
  spellFullDescription?: SpellFullDescription;
  popup = false;

  constructor(private customTypeOfSpellService: CustomTypeOfSpellServiceService, private spellService: SpellService) {
  }

  ngOnInit() {
    this.onGetAllCustomTypeOfSpells();
  }

  onGetAllCustomTypeOfSpells() {
    this.customTypeOfSpellService.getAllCustomTypeOfSpells().subscribe(data => {
      this.customTypeOfSpell = data;
    })
  }

  getASpellFullDescriptionById(id: number) {
    this.spellService.getASpellDescription(id).subscribe(data => {
      this.spellFullDescription = data;
    })
    this.popup=true;
  }


  findSpellsForACustomTypeOfSpell(id: number) {
    this.spellService.findSpellsForACustomTypeOfSpell(id).subscribe((response: SpellShortDescription[]) => {
      this.spellsShortDescription = response;
    })
  }

}
