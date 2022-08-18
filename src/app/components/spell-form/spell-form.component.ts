import {Component, OnInit} from '@angular/core';
import {SpellService} from "../../services/spell-service/spell-service";
import {SpellFullDescription} from "../../model/spell-full-description";
import {CustomTypeOfSpellServiceService} from "../../services/CustomTypeOfSpell/custom-type-of-spell-service.service";
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";
import {Observable} from "rxjs";
import {ComponentServiceService} from "../../services/components-service/component-service.service";
import {ComponentOfSpell} from "../../model/component-of-spell";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-spell-form',
  templateUrl: './spell-form.component.html',
  styleUrls: ['./spell-form.component.css']
})
export class SpellFormComponent implements OnInit {
  customTypeOfSpells?: CustomTypeOfSpell[] = [];
  components?: ComponentOfSpell[] = [];
  custom:string="TEST";
  constructor(private spellService: SpellService, private customTypeOfSpellService: CustomTypeOfSpellServiceService, private componentOfSpellService: ComponentServiceService,private router:Router) {
  }

  ngOnInit(): void {
    this.initializeStuff();
  }

  spellForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    customTypeOfSpellName: new FormControl('',[Validators.required]),
    school:new FormControl('',[Validators.required]),
    level: new FormControl('', [Validators.required, Validators.min(0)]),
    componentsNames: new FormControl('',[Validators.required]),
    characterClassesNames: new FormControl('',[Validators.required]),
    spellResistance: new FormControl('',[Validators.required]),
    castingTime: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    range: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    target: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    duration: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    savingThrow: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    shortDescription: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(250)]),
    fullDescription: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(250)]),
    icon: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(250)])

  });

  get f(){
    return this.spellForm.controls;
  }

  submit(){
    console.log(this.spellForm.value);
    alert(this.spellForm.value);
  }


  initializeStuff() {
    this.customTypeOfSpellService.getAllCustomTypeOfSpells().subscribe(customTypeOfSpells => this.customTypeOfSpells = customTypeOfSpells);
    this.componentOfSpellService.getAllComponents().subscribe(components => this.components = components);
  }

  addASpell(spell: SpellFullDescription) {
   /* alert(spell.id + spell.title + spell.customTypeOfSpellName + spell.school +
      spell.level + spell.componentsNames + spell.characterClassesNames +
      spell.castingTime + spell.range + spell.target + spell.duration + spell.savingThrow
      + spell.spellResistance + spell.shortDescription + spell.fullDescription + spell.icon);*/

    this.spellService.addASpell(spell).subscribe((response: SpellFullDescription) => {
      console.log(response);
      this.router.navigateByUrl("/spells");
    });
  }


}
