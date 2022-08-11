import { Component, OnInit } from '@angular/core';
import {AdditionnalRandomOutcomeServiceService} from "../../services/AdditionalRandomOutcome/additionnal-random-outcome-service.service";
import {AdditionalRandomOutcome} from "../../model/additional-random-outcome";

@Component({
  selector: 'app-additional-random-outcome',
  templateUrl: './additional-random-outcome.component.html',
  styleUrls: ['./additional-random-outcome.component.css']
})
export class AdditionalRandomOutcomeComponent implements OnInit {
additionalRandomOutcome?:AdditionalRandomOutcome;
  constructor(private additionalRandomOutcomeService:AdditionnalRandomOutcomeServiceService) { }

  ngOnInit(): void {
  }
  onGetAnAdditionalRandomOutcome(){
    this.additionalRandomOutcomeService.getAnAdditionalRandomOutcome().subscribe(data=>{this.additionalRandomOutcome=data;})
  }
}
