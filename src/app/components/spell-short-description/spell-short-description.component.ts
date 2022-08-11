import {Component, OnInit} from '@angular/core';
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellShortDescription} from "../../model/spell-short-description";
@Component({
  selector: 'app-spell-short-description',
  templateUrl: './spell-short-description.component.html',
  styleUrls: ['./spell-short-description.component.css']
})
export class SpellShortDescriptionComponent implements OnInit {
spellsShortDescription?:SpellShortDescription[];

  constructor(private spellService:SpellService) {
  }

  ngOnInit(): void {
  }

  /*onGetAllSpellsShortDescription() {
    this.spellService.getAllSpellsShortDescription().subscribe(data=>{
      this.spellsShortDescription=data;
    })
  }*/
}
