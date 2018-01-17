import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TemakorokRoutingModule } from './temakorok/temakorok-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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

import { AlgebraiKifejezesekComponent } from './temakorok/algebrai-kifejezesek/algebrai-kifejezesek/algebrai-kifejezesek.component';
import { MuveletekAlgebraiKifejezesekelkComponent } from './temakorok/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel/muveletek-algebrai-kifejezesekkel.component';

import { ElsofokuEgyenletekComponent } from './temakorok/elsofoku-egyenletek/elsofoku-egyenletek/elsofoku-egyenletek.component';
import { ElsofokuEgyenlotlensegekComponent } from './temakorok/elsofoku-egyenletek/elsofoku-egyenlotlensegek/elsofoku-egyenlotlensegek.component';

import { SzovegesAltalanosComponent } from './temakorok/szoveges-feladatok/szoveges-altalanos/szoveges-altalanos.component';
import { SzovegesVegyesComponent } from './temakorok/szoveges-feladatok/szoveges-vegyes/szoveges-vegyes.component';

import { SikgeometriaAlapfogalmakComponent } from './temakorok/sikgeometria/sikgeometria-alapfogalmak/sikgeometria-alapfogalmak.component';
import { SikgeometriaHaromszogekComponent } from './temakorok/sikgeometria/sikgeometria-haromszogek/sikgeometria-haromszogek.component';
import { SikgeometriaSokszogekComponent } from './temakorok/sikgeometria/sikgeometria-sokszogek/sikgeometria-sokszogek.component';
import { SikgeometriaEgybevagosagComponent } from './temakorok/sikgeometria/sikgeometria-egybevagosag/sikgeometria-egybevagosag.component';

import { KeruletComponent } from './temakorok/kerulet-terulet-pitagorasz/kerulet/kerulet.component';
import { TeruletComponent } from './temakorok/kerulet-terulet-pitagorasz/terulet/terulet.component';

import { FelszinTerfogatAlapfogalmakComponent } from './temakorok/felszin-terfogat/felszin-terfogat-alapfogalmak/felszin-terfogat-alapfogalmak.component';
import { TestekFelszineComponent } from './temakorok/felszin-terfogat/testek-felszine/testek-felszine.component';
import { TestekTerfogataComponent } from './temakorok/felszin-terfogat/testek-terfogata/testek-terfogata.component';

import { CanActivateViaAuthGuard } from './shared/guards';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      { 
        path: 'temakorok',
        component: TemakorokComponent,
        canActivate: [CanActivateViaAuthGuard],
        canActivateChild: [CanActivateViaAuthGuard],
        // loadChildren: './temakorok/temakorok-routing.module#TemakorokRoutingModule'
      },

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

      { path: 'temakorok/sorozatok/szamsorozatok', component: SzamsorozatokComponent },
      { path: 'temakorok/sorozatok/szamtani-sorozatok', component: SzamtaniSorozatokComponent },

      { path: 'temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak', component: AranySzazalekAlapfogalmakComponent },
      { path: 'temakorok/aranyossag-szazalek/szovegertelmezes', component: SzovegertelmezesComponent },
      { path: 'temakorok/aranyossag-szazalek/szazalekszamitas', component: SzazalekszamitasComponent },
      { path: 'temakorok/aranyossag-szazalek/forditott-aranyossag', component: ForditottAranyossagComponent },
      
      { path: 'temakorok/szamelmelet-oszthatosag/oszto-tobbszoros', component: OsztoTobbszorosComponent },
      { path: 'temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb', component: LegnagyobbLegkisebbComponent },

      { path: 'temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben', component: TajekozodasKoordinatarendszerbenComponent },
      { path: 'temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek', component: LinearisFuggvenyekComponent },

      { path: 'temakorok/algebrai-kifejezesek/algebrai-kifejezesek', component: AlgebraiKifejezesekComponent },
      { path: 'temakorok/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel', component: MuveletekAlgebraiKifejezesekelkComponent },

      { path: 'temakorok/elsofoku-egyenletek/elsofoku-egyenletek', component: ElsofokuEgyenletekComponent },
      { path: 'temakorok/elsofoku-egyenletek/elsofoku-egyenlotlensegek', component: ElsofokuEgyenlotlensegekComponent },

      { path: 'temakorok/szoveges-feladatok/szoveges-altalanos', component: SzovegesAltalanosComponent },
      { path: 'temakorok/szoveges-feladatok/szoveges-vegyes', component: SzovegesVegyesComponent },

      { path: 'temakorok/sikgeometria/sikgeometria-alapfogalmak', component: SikgeometriaAlapfogalmakComponent },
      { path: 'temakorok/sikgeometria/sikgeometria-haromszogek', component: SikgeometriaHaromszogekComponent },
      { path: 'temakorok/sikgeometria/sikgeometria-sokszogek', component: SikgeometriaSokszogekComponent },
      { path: 'temakorok/sikgeometria/sikgeometria-egybevagosag', component: SikgeometriaEgybevagosagComponent },

      { path: 'temakorok/kerulet-terulet-pitagorasz/kerulet', component: KeruletComponent },
      { path: 'temakorok/kerulet-terulet-pitagorasz/terulet', component: TeruletComponent },

      { path: 'temakorok/felszin-terfogat/felszin-terfogat-alapfogalmak', component: FelszinTerfogatAlapfogalmakComponent },
      { path: 'temakorok/felszin-terfogat/testek-felszine', component: TestekFelszineComponent },
      { path: 'temakorok/felszin-terfogat/testek-terfogata', component: TestekTerfogataComponent }
    ])
  ],
  providers: [CanActivateViaAuthGuard],
  exports: [NativeScriptRouterModule]
})

/*

Lazyload temakorok components!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/

export class AppRoutingModule {

}
