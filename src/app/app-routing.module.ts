import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {SpellFullDescriptionComponent} from "./components/spell-full-description/spell-full-description.component";
import {CustomTypeOfSpellComponent} from "./components/custom-type-of-spell/custom-type-of-spell.component";
import {SpellCastingOutcomeComponent} from "./components/spell-casting-outcome/spell-casting-outcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SpellFormComponent} from "./components/spell-form/spell-form.component";
import {SpellEditComponent} from "./components/spell-edit/spell-edit.component";
import {LoginComponent} from "./components/login/login.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {HomeComponent} from "./components/home/home.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about-us", component:AboutUsComponent},
  {path:"spells", component:SpellFullDescriptionComponent},
  {path:"nav-bar", component:NavBarComponent},
  {path:"customTypeOfSpells",component:CustomTypeOfSpellComponent},
  {path:"spellOutcomes",component:SpellCastingOutcomeComponent},
  {path:"footerEl",component:FooterComponent},
  {path:"spellForm",component:SpellFormComponent},
  {path:"spellEdit/:id",component:SpellEditComponent},
  {path:"login",component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
