import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { ContactComponent } from './contact/contact.component';
import { TemakorokComponent } from './temakorok/temakorok.component';
import { TemakorComponent } from './temakorok/temakor.component';

import { MuveletekTermeszetesSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

import { HosszTeruletTerfogatUrComponent } from './temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component';
import { IdoTomegEgyebComponent } from './temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component';

import { HalmazLogikaComponent } from './temakorok/halmazok-logika-kombinatorika/halmaz-logika/halmaz-logika.component';
import { KombinatorikaComponent } from './temakorok/halmazok-logika-kombinatorika/kombinatorika/kombinatorika.component';

import { StatisztikaComponent } from './temakorok/statisztika-grafikon/statisztika/statisztika.component';
import { GrafikonelemzesComponent } from './temakorok/statisztika-grafikon/grafikonelemzes/grafikonelemzes.component'

import { SzamhalmazokComponent } from './temakorok/szamhalmazok-hatvanyozas/szamhalmazok/szamhalmazok.component';
import { SzamhalmazMuveletekComponent } from './temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek/szamhalmaz-muveletek.component';
import { HatvanyozasComponent } from './temakorok/szamhalmazok-hatvanyozas/hatvanyozas/hatvanyozas.component';

import { SzamsorozatokComponent } from './temakorok/sorozatok/szamsorozatok/szamsorozatok.component';
import { SzamtaniSorozatokComponent } from './temakorok/sorozatok/szamtani-sorozatok/szamtani-sorozatok.component';

import { AranySzazalekAlapfogalmakComponent } from './temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak/arany-szazalek-alapfogalmak.component';
import { SzovegertelmezesComponent } from './temakorok/aranyossag-szazalek/szovegertelmezes/szovegertelmezes.component';
import { SzazalekszamitasComponent } from './temakorok/aranyossag-szazalek/szazalekszamitas/szazalekszamitas.component';
import { ForditottAranyossagComponent } from './temakorok/aranyossag-szazalek/forditott-aranyossag/forditott-aranyossag.component';

import { OsztoTobbszorosComponent } from './temakorok/szamelmelet-oszthatosag/oszto-tobbszoros/oszto-tobbszoros.component';
import { LegnagyobbLegkisebbComponent } from './temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb/legnagyobb-legkisebb.component';

import { TajekozodasKoordinatarendszerbenComponent } from './temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben/tajekozodas-koordinatarendszerben.component';
import { LinearisFuggvenyekComponent } from './temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek/linearis-fuggvenyek.component';

import { SharedModule } from './shared';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    TemakorokComponent,
    TemakorComponent,

    MuveletekTermeszetesSzamokkalComponent,
    MuveletekEgeszSzamokkalComponent,
    MuveletekRacionalisSzamokkalComponent,

    HosszTeruletTerfogatUrComponent,
    IdoTomegEgyebComponent,

    HalmazLogikaComponent,
    KombinatorikaComponent,

    StatisztikaComponent,
    GrafikonelemzesComponent,

    SzamhalmazokComponent,
    SzamhalmazMuveletekComponent,
    HatvanyozasComponent,

    SzamsorozatokComponent,
    SzamtaniSorozatokComponent,

    AranySzazalekAlapfogalmakComponent,
    SzovegertelmezesComponent,
    SzazalekszamitasComponent,
    ForditottAranyossagComponent,

    OsztoTobbszorosComponent,
    LegnagyobbLegkisebbComponent,

    TajekozodasKoordinatarendszerbenComponent,
    LinearisFuggvenyekComponent,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
