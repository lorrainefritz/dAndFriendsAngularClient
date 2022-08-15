import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomTypeOfSpell} from "../../model/custom-type-of-spell";
import {ComponentOfSpell} from "../../model/component-of-spell";
import {SpellService} from "../../services/spell-service/spell-service";
import {CustomTypeOfSpellServiceService} from "../../services/CustomTypeOfSpell/custom-type-of-spell-service.service";
import {ComponentServiceService} from "../../services/components-service/component-service.service";
import {Router, ActivatedRoute, ActivatedRouteSnapshot, ParamMap} from "@angular/router";
import {SpellFullDescription} from "../../model/spell-full-description";
import {RxFormBuilder, FormGroupExtension} from "@rxweb/reactive-form-validators"

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.css']
})
export class SpellEditComponent implements OnInit {
  customTypeOfSpells?: CustomTypeOfSpell[] = [];
  components?: ComponentOfSpell[] = [];
  currentSpell?: SpellFullDescription;
  title?:string ;

  constructor(private spellService: SpellService, private customTypeOfSpellService: CustomTypeOfSpellServiceService, private componentOfSpellService: ComponentServiceService, private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      var id = Number(params.get('id'));
      this.initializeStuff(id);
      this.spellService.getASpellDescription(id).subscribe(data => {
        this.currentSpell = data;
        alert(this.currentSpell.title);
        this.spellFormEdit.setValue({
          id:params.get('id'),
          title:this.currentSpell!== undefined ? this.currentSpell.title :'',
          customTypeOfSpellName: this.currentSpell!== undefined ? this.currentSpell.customTypeOfSpellName :'',
          school:this.currentSpell!== undefined ? this.currentSpell.school :'',
          level: (this.currentSpell.level).toString()!== undefined ? (this.currentSpell.level).toString(): '',
          componentsNames: (this.currentSpell.componentsNames).toString()!== undefined ? (this.currentSpell.componentsNames).toString(): '',
          characterClassesNames: (this.currentSpell.characterClassesNames).toString()!== undefined ? (this.currentSpell.characterClassesNames).toString(): '',
          spellResistance: (this.currentSpell.spellResistance).toString()!== undefined ? (this.currentSpell.spellResistance).toString(): '',
          castingTime: this.currentSpell!== undefined ? this.currentSpell.castingTime :'',
          range: this.currentSpell!== undefined ? this.currentSpell.range :'',
          target: this.currentSpell!== undefined ? this.currentSpell.target :'',
          duration: this.currentSpell!== undefined ? this.currentSpell.duration :'',
          savingThrow: this.currentSpell!== undefined ? this.currentSpell.savingThrow :'',
          shortDescription: this.currentSpell!== undefined ? this.currentSpell.shortDescription :'',
          fullDescription: this.currentSpell!== undefined ? this.currentSpell.fullDescription :'',
          icon: this.currentSpell!== undefined ? this.currentSpell.icon :''
        })

      });



    });
  }

  spellFormEdit = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(1)]),
    title: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    customTypeOfSpellName: new FormControl(''),
    school:new FormControl(''),
    level: new FormControl('', [Validators.required, Validators.min(0)]),
    componentsNames: new FormControl(''),
    characterClassesNames: new FormControl(''),
    spellResistance: new FormControl(''),
    castingTime: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    range: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    target: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    duration: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    savingThrow: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    shortDescription: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    fullDescription: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)]),
    icon: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(65)])

  });

  get f() {
    return this.spellFormEdit.controls;
  }

  submit() {
    console.log(this.spellFormEdit.value);
    alert(this.spellFormEdit.value);
  }


  initializeStuff(id: number) {
    this.customTypeOfSpellService.getAllCustomTypeOfSpells().subscribe(customTypeOfSpells => this.customTypeOfSpells = customTypeOfSpells);
    this.componentOfSpellService.getAllComponents().subscribe(components => this.components = components);
    this.spellService.getASpellDescription(id).subscribe(data => {
      this.currentSpell = data;
    });

  }

  addSpellAfterEdit(spell: SpellFullDescription) {
    alert(spell.id + spell.title + spell.customTypeOfSpellName + spell.school +
      spell.level + spell.componentsNames + spell.characterClassesNames +
      spell.castingTime + spell.range + spell.target + spell.duration + spell.savingThrow
      + spell.spellResistance + spell.shortDescription + spell.fullDescription + spell.icon);

    this.spellService.addASpell(spell).subscribe((response: SpellFullDescription) => {
      console.log(response);
      this._router.navigateByUrl("/spells");
    });
  }

}
