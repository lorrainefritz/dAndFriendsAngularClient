import { Component, OnInit } from '@angular/core';
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellFullDescription} from "../../model/spell-full-description";
import {Observable} from "rxjs";
import {SpellShortDescription} from "../../model/spell-short-description";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-spell-full-description',
  templateUrl: './spell-full-description.component.html',
  styleUrls: ['./spell-full-description.component.css']
})
export class SpellFullDescriptionComponent implements OnInit {
  spellFullDescription?:SpellFullDescription[];
  constructor(private spellService:SpellService) { }

  ngOnInit() {
    this.onGetAllSpellsFullDescription();
  }
  onGetAllSpellsFullDescription(){
    this.spellService.getAllSpellsFullDescription().subscribe(data=>{
      this.spellFullDescription=data;
    })
  }

}
