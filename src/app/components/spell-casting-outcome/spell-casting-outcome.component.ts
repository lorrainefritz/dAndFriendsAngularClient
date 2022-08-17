import {Component, OnInit} from '@angular/core';
import {SpellCastingOutcomeServiceService} from "../../services/SpellCastingOutcome/spell-casting-outcome-service.service";
import {SpellCastingOutcome} from "../../model/spell-casting-outcome";
import {AdditionalRandomOutcome} from "../../model/additional-random-outcome";
import {AdditionnalRandomOutcomeServiceService} from "../../services/AdditionalRandomOutcome/additionnal-random-outcome-service.service";

@Component({
  selector: 'app-spell-casting-outcome',
  templateUrl: './spell-casting-outcome.component.html',
  styleUrls: ['./spell-casting-outcome.component.css']
})
export class SpellCastingOutcomeComponent implements OnInit {
  additionalRandomOutcome?: AdditionalRandomOutcome;
  spellCastingOutcome?: SpellCastingOutcome;
  spellCastingOutcomes?: SpellCastingOutcome[];

  constructor(private spellCastingOutcomeService: SpellCastingOutcomeServiceService,private additionalRandomOutcomeService:AdditionnalRandomOutcomeServiceService ) {
  }

  ngOnInit(): void {
  }

  getAllSpellCastingOutcomes() {
    this.spellCastingOutcomeService.getAllSpellCastingOutcomes().subscribe(data => {
      this.spellCastingOutcomes = data;
    })
  }

  getAspellCastingOutcome(b: boolean) {
    this.spellCastingOutcomeService.getASpellCastingOutcome(b).subscribe((response: SpellCastingOutcome) => {
      this.spellCastingOutcome = response;
      this.additionalRandomOutcome=undefined;
    })
  }

  onGetAnAdditionalRandomOutcome(){
    this.additionalRandomOutcomeService.getAnAdditionalRandomOutcome().subscribe(data=>{this.additionalRandomOutcome=data;})
  }



  getAspellCastingOutcomeById(id: number) {
    this.spellCastingOutcomeService.getASpellCastingOutcomeById(id).subscribe(data => {
      this.spellCastingOutcome = data;
    })
  }
}
