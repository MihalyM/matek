import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TemakorokComponent } from './temakorok.component';
import { TemakorComponent } from './temakor.component';

import { MuveletekTermeszetesSzamokkalComponent } from './szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';

import { HosszTeruletTerfogatUrComponent } from './mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component';
import { IdoTomegEgyebComponent } from './mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component';

import { HalmazLogikaComponent } from './halmazok-logika-kombinatorika/halmaz-logika/halmaz-logika.component';
import { KombinatorikaComponent } from './halmazok-logika-kombinatorika/kombinatorika/kombinatorika.component';

import { StatisztikaComponent } from './statisztika-grafikon/statisztika/statisztika.component';
import { GrafikonelemzesComponent } from './statisztika-grafikon/grafikonelemzes/grafikonelemzes.component'

import { SzamhalmazokComponent } from './szamhalmazok-hatvanyozas/szamhalmazok/szamhalmazok.component';
import { SzamhalmazMuveletekComponent } from './szamhalmazok-hatvanyozas/szamhalmaz-muveletek/szamhalmaz-muveletek.component';
import { HatvanyozasComponent } from './szamhalmazok-hatvanyozas/hatvanyozas/hatvanyozas.component';

// import {  } from './.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
      { path: 'temakorok/:id', component: TemakorComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: MuveletekTermeszetesSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: MuveletekEgeszSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: MuveletekRacionalisSzamokkalComponent },

      { path: 'temakorok/mertekvaltas/hossz-terulet-terfogat-ur', component: HosszTeruletTerfogatUrComponent },
      { path: 'temakorok/mertekvaltas/ido-tomeg-egyeb', component: IdoTomegEgyebComponent },

      { path: 'temakorok/halmazok-logika-kombinatorika/halmaz-logika', component: HalmazLogikaComponent },
      { path: 'temakorok/halmazok-logika-kombinatorika/kombinatorika', component: KombinatorikaComponent },

      { path: 'temakorok/statisztika-grafikon/statisztika', component: StatisztikaComponent },
      { path: 'temakorok/statisztika-grafikon/grafikonelemzes', component: GrafikonelemzesComponent },

      { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmazok', component: SzamhalmazokComponent },
      { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek', component: SzamhalmazMuveletekComponent },
      { path: 'temakorok/szamhalmazok-hatvanyozas/hatvanyozas', component: HatvanyozasComponent },

      // { path: 'temakorok/', component: Component },
    ])
  ],
  declarations: [
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
    HatvanyozasComponent
  ],
  providers: [],
  exports: [NativeScriptRouterModule]
})

/*

Lazyload temakorok components!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/

export class TemakorokRoutingModule {

}
