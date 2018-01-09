import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TemakorokComponent } from './temakorok/temakorok.component';
import { TemakorComponent } from './temakorok/temakor.component';

// import { SzamolasiKeszsegComponent } from './temakorok/szamolasi-keszseg/szamolasi-keszseg.component';
import { MuveletekTermeszetesSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component';
import { MuveletekEgeszSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component';
import { MuveletekRacionalisSzamokkalComponent } from './temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component';


// import { MertekvaltasComponent } from './temakorok/mertekvaltas/mertekvaltas.component';
// import { HalmazokLogikaKombinatorikaComponent } from './temakorok/halmazok-logika-kombinatorika/halmazok-logika-kombinatorika.component';
// import { StatisztikaGrafikonComponent } from './temakorok/statisztika-grafikon/statisztika-grafikon.component';
// import { SzamhalmazokHatvanyozasComponent } from './temakorok/szamhalmazok-hatvanyozas/szamhalmazok-hatvanyozas.component';
// import { SorozatokComponent } from './temakorok/sorozatok/sorozatok.component';
// import { AranyossagSzazalekComponent } from './temakorok/aranyossag-szazalek/aranyossag-szazalek.component';
// import { SzamelmeletOszthatosagComponent } from './temakorok/szamelmelet-oszthatosag/szamelmelet-oszthatosag.component';
// import { KoordinataLinearisFuggvenyekComponent } from './temakorok/koordinata-linearis-fuggvenyek/koordinata-linearis-fuggvenyek.component';
// import { AlgebraiKifejezesekComponent } from './temakorok/algebrai-kifejezesek/algebrai-kifejezesek.component';
// import { ElsofokuEgyenletekComponent } from './temakorok/elsofoku-egyenletek/elsofoku-egyenletek.component';
// import { SzovegesFeladatokComponent } from './temakorok/szoveges-feladatok/szoveges-feladatok.component';
// import { SikgeometriaComponent } from './temakorok/sikgeometria/sikgeometria.component';
// import { KeruletTeruletPitagoraszComponent } from './temakorok/kerulet-terulet-pitagorasz/kerulet-terulet-pitagorasz.component';
// import { FelszinTerfogatComponent } from './temakorok/felszin-terfogat/felszin-terfogat.component';

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
        canActivateChild: [CanActivateViaAuthGuard]
      },
      { path: 'temakorok/:id', component: TemakorComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: MuveletekTermeszetesSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: MuveletekEgeszSzamokkalComponent },
      { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: MuveletekRacionalisSzamokkalComponent },

      // { path: 'temakorok/mertekvaltas', component: MertekvaltasComponent },
      // { path: 'temakorok/halmazok-logika-kombinatorika', component: HalmazokLogikaKombinatorikaComponent },
      // { path: 'temakorok/statisztika-grafikon', component: StatisztikaGrafikonComponent },
      // { path: 'temakorok/szamhalmazok-hatvanyozas', component: SzamhalmazokHatvanyozasComponent },
      // { path: 'temakorok/sorozatok', component: SorozatokComponent },
      // { path: 'temakorok/aranyossag-szazalek', component: AranyossagSzazalekComponent },
      // { path: 'temakorok/szamelmelet-oszthatosag', component: SzamelmeletOszthatosagComponent },
      // { path: 'temakorok/koordinata-linearis-fuggvenyek', component: KoordinataLinearisFuggvenyekComponent },
      // { path: 'temakorok/algebrai-kifejezesek', component: AlgebraiKifejezesekComponent },
      // { path: 'temakorok/elsofoku-egyenletek', component: ElsofokuEgyenletekComponent },
      // { path: 'temakorok/szoveges-feladatok', component: SzovegesFeladatokComponent },
      // { path: 'temakorok/sikgeometria', component: SikgeometriaComponent },
      // { path: 'temakorok/kerulet-terulet-pitagorasz', component: KeruletTeruletPitagoraszComponent },
      // { path: 'temakorok/felszin-terfogat', component: FelszinTerfogatComponent },
    ])
  ],
  providers: [CanActivateViaAuthGuard],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
