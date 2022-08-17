import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {SpellFullDescriptionComponent} from './components/spell-full-description/spell-full-description.component';
import {SpellShortDescriptionComponent} from './components/spell-short-description/spell-short-description.component';
import {AdditionalRandomOutcomeComponent} from './components/additional-random-outcome/additional-random-outcome.component';
import {CustomTypeOfSpellComponent} from './components/custom-type-of-spell/custom-type-of-spell.component';
import {FooterComponent} from './components/footer/footer.component';
import {SpellCastingOutcomeComponent} from './components/spell-casting-outcome/spell-casting-outcome.component';
import {HttpClientModule} from "@angular/common/http";
import {SpellFormComponent} from './components/spell-form/spell-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SpellEditComponent} from './components/spell-edit/spell-edit.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {CookieService} from "ngx-cookie-service";
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SpellFullDescriptionComponent,
    SpellShortDescriptionComponent,
    AdditionalRandomOutcomeComponent,
    CustomTypeOfSpellComponent,
    FooterComponent,
    SpellCastingOutcomeComponent,
    SpellFormComponent,
    SpellEditComponent,
    LoginComponent,
    LoginFormComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
