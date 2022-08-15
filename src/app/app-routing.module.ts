import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {SpellFullDescriptionComponent} from "./components/spell-full-description/spell-full-description.component";
import {CustomTypeOfSpellComponent} from "./components/custom-type-of-spell/custom-type-of-spell.component";
import {SpellCastingOutcomeComponent} from "./components/spell-casting-outcome/spell-casting-outcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SpellFormComponent} from "./components/spell-form/spell-form.component";
import {SpellEditComponent} from "./components/spell-edit/spell-edit.component";

const routes: Routes = [
  { path:"spells", component:SpellFullDescriptionComponent},
  { path:"nav-bar", component:NavBarComponent},
  { path:"customTypeOfSpells",component:CustomTypeOfSpellComponent},
  {path:"spellOutcomes",component:SpellCastingOutcomeComponent},
  { path:"footerEl",component:FooterComponent},
  {path:"spellForm",component:SpellFormComponent},
  {path:"spellEdit/:id",component:SpellEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
