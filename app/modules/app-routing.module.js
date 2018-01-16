"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var temakorok_component_1 = require("./temakorok/temakorok.component");
var temakor_component_1 = require("./temakorok/temakor.component");
var muveletek_termeszetes_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component");
var muveletek_egesz_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component");
var muveletek_racionalis_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component");
var hossz_terulet_terfogat_ur_component_1 = require("./temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component");
var ido_tomeg_egyeb_component_1 = require("./temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component");
var halmaz_logika_component_1 = require("./temakorok/halmazok-logika-kombinatorika/halmaz-logika/halmaz-logika.component");
var kombinatorika_component_1 = require("./temakorok/halmazok-logika-kombinatorika/kombinatorika/kombinatorika.component");
var statisztika_component_1 = require("./temakorok/statisztika-grafikon/statisztika/statisztika.component");
var grafikonelemzes_component_1 = require("./temakorok/statisztika-grafikon/grafikonelemzes/grafikonelemzes.component");
var szamhalmazok_component_1 = require("./temakorok/szamhalmazok-hatvanyozas/szamhalmazok/szamhalmazok.component");
var szamhalmaz_muveletek_component_1 = require("./temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek/szamhalmaz-muveletek.component");
var hatvanyozas_component_1 = require("./temakorok/szamhalmazok-hatvanyozas/hatvanyozas/hatvanyozas.component");
var szamsorozatok_component_1 = require("./temakorok/sorozatok/szamsorozatok/szamsorozatok.component");
var szamtani_sorozatok_component_1 = require("./temakorok/sorozatok/szamtani-sorozatok/szamtani-sorozatok.component");
var arany_szazalek_alapfogalmak_component_1 = require("./temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak/arany-szazalek-alapfogalmak.component");
var szovegertelmezes_component_1 = require("./temakorok/aranyossag-szazalek/szovegertelmezes/szovegertelmezes.component");
var szazalekszamitas_component_1 = require("./temakorok/aranyossag-szazalek/szazalekszamitas/szazalekszamitas.component");
var forditott_aranyossag_component_1 = require("./temakorok/aranyossag-szazalek/forditott-aranyossag/forditott-aranyossag.component");
var oszto_tobbszoros_component_1 = require("./temakorok/szamelmelet-oszthatosag/oszto-tobbszoros/oszto-tobbszoros.component");
var legnagyobb_legkisebb_component_1 = require("./temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb/legnagyobb-legkisebb.component");
var tajekozodas_koordinatarendszerben_component_1 = require("./temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben/tajekozodas-koordinatarendszerben.component");
var linearis_fuggvenyek_component_1 = require("./temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek/linearis-fuggvenyek.component");
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
// import {  } from './temakorok/.component';
var guards_1 = require("./shared/guards");
var AppRoutingModule = (function () {
    /*
    
    Lazyload temakorok components!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    */
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: "register",
                    component: register_component_1.RegisterComponent
                },
                {
                    path: 'temakorok',
                    component: temakorok_component_1.TemakorokComponent,
                    canActivate: [guards_1.CanActivateViaAuthGuard],
                    canActivateChild: [guards_1.CanActivateViaAuthGuard],
                },
                { path: 'temakorok/:id', component: temakor_component_1.TemakorComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: muveletek_termeszetes_szamokkal_component_1.MuveletekTermeszetesSzamokkalComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: muveletek_egesz_szamokkal_component_1.MuveletekEgeszSzamokkalComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: muveletek_racionalis_szamokkal_component_1.MuveletekRacionalisSzamokkalComponent },
                { path: 'temakorok/mertekvaltas/hossz-terulet-terfogat-ur', component: hossz_terulet_terfogat_ur_component_1.HosszTeruletTerfogatUrComponent },
                { path: 'temakorok/mertekvaltas/ido-tomeg-egyeb', component: ido_tomeg_egyeb_component_1.IdoTomegEgyebComponent },
                { path: 'temakorok/halmazok-logika-kombinatorika/halmaz-logika', component: halmaz_logika_component_1.HalmazLogikaComponent },
                { path: 'temakorok/halmazok-logika-kombinatorika/kombinatorika', component: kombinatorika_component_1.KombinatorikaComponent },
                { path: 'temakorok/statisztika-grafikon/statisztika', component: statisztika_component_1.StatisztikaComponent },
                { path: 'temakorok/statisztika-grafikon/grafikonelemzes', component: grafikonelemzes_component_1.GrafikonelemzesComponent },
                { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmazok', component: szamhalmazok_component_1.SzamhalmazokComponent },
                { path: 'temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek', component: szamhalmaz_muveletek_component_1.SzamhalmazMuveletekComponent },
                { path: 'temakorok/szamhalmazok-hatvanyozas/hatvanyozas', component: hatvanyozas_component_1.HatvanyozasComponent },
                { path: 'temakorok/sorozatok/szamsorozatok', component: szamsorozatok_component_1.SzamsorozatokComponent },
                { path: 'temakorok/sorozatok/szamtani-sorozatok', component: szamtani_sorozatok_component_1.SzamtaniSorozatokComponent },
                { path: 'temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak', component: arany_szazalek_alapfogalmak_component_1.AranySzazalekAlapfogalmakComponent },
                { path: 'temakorok/aranyossag-szazalek/szovegertelmezes', component: szovegertelmezes_component_1.SzovegertelmezesComponent },
                { path: 'temakorok/aranyossag-szazalek/szazalekszamitas', component: szazalekszamitas_component_1.SzazalekszamitasComponent },
                { path: 'temakorok/aranyossag-szazalek/forditott-aranyossag', component: forditott_aranyossag_component_1.ForditottAranyossagComponent },
                { path: 'temakorok/szamelmelet-oszthatosag/oszto-tobbszoros', component: oszto_tobbszoros_component_1.OsztoTobbszorosComponent },
                { path: 'temakorok/szamelmelet-oszthatosag/legnagyobb-legkisebb', component: legnagyobb_legkisebb_component_1.LegnagyobbLegkisebbComponent },
                { path: 'temakorok/koordinata-linearis-fuggvenyek/tajekozodas-koordinatarendszerben', component: tajekozodas_koordinatarendszerben_component_1.TajekozodasKoordinatarendszerbenComponent },
                { path: 'temakorok/koordinata-linearis-fuggvenyek/linearis-fuggvenyek', component: linearis_fuggvenyek_component_1.LinearisFuggvenyekComponent },
            ])
        ],
        providers: [guards_1.CanActivateViaAuthGuard],
        exports: [router_1.NativeScriptRouterModule]
    })
    /*
    
    Lazyload temakorok components!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    */
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUl2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLHVFQUFxRTtBQUNyRSxtRUFBaUU7QUFFakUscUtBQWlLO0FBQ2pLLG1KQUErSTtBQUMvSSxrS0FBOEo7QUFFOUosOElBQXlJO0FBQ3pJLGdIQUE0RztBQUU1RywySEFBd0g7QUFDeEgsMkhBQXlIO0FBRXpILDRHQUEwRztBQUMxRyx3SEFBcUg7QUFFckgsbUhBQWlIO0FBQ2pILDJJQUF3STtBQUN4SSxnSEFBOEc7QUFFOUcsdUdBQXFHO0FBQ3JHLHNIQUFtSDtBQUVuSCwySkFBdUo7QUFDdkosMEhBQXdIO0FBQ3hILDBIQUF3SDtBQUN4SCxzSUFBbUk7QUFFbkksOEhBQTJIO0FBQzNILDBJQUF1STtBQUV2SSx3TEFBcUw7QUFDckwsOElBQTJJO0FBQzNJLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFFN0MsMENBQTBEO0FBaUcxRCxJQUFhLGdCQUFnQjtJQU43Qjs7OztNQUlFO0lBRUY7SUFFQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGdCQUFnQjtJQS9GNUIsZUFBUSxD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QU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7SUFFRjs7OztNQUlFO0dBRVcsZ0JBQWdCLENBRTVCO0FBRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGVtYWtvcm9rUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGVtYWtvcm9rL3RlbWFrb3Jvay1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1ha29yb2tDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yb2suY29tcG9uZW50JztcbmltcG9ydCB7IFRlbWFrb3JDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLXRlcm1lc3pldGVzLXN6YW1va2thbC9tdXZlbGV0ZWstdGVybWVzemV0ZXMtc3phbW9ra2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdXZlbGV0ZWtFZ2VzelN6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1lZ2Vzei1zemFtb2trYWwvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXV2ZWxldGVrUmFjaW9uYWxpc1N6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1yYWNpb25hbGlzLXN6YW1va2thbC9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSG9zc3pUZXJ1bGV0VGVyZm9nYXRVckNvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL21lcnRla3ZhbHRhcy9ob3Nzei10ZXJ1bGV0LXRlcmZvZ2F0LXVyL2hvc3N6LXRlcnVsZXQtdGVyZm9nYXQtdXIuY29tcG9uZW50JztcbmltcG9ydCB7IElkb1RvbWVnRWd5ZWJDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9tZXJ0ZWt2YWx0YXMvaWRvLXRvbWVnLWVneWViL2lkby10b21lZy1lZ3llYi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBIYWxtYXpMb2dpa2FDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS9oYWxtYXotbG9naWthL2hhbG1hei1sb2dpa2EuY29tcG9uZW50JztcbmltcG9ydCB7IEtvbWJpbmF0b3Jpa2FDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS9rb21iaW5hdG9yaWthL2tvbWJpbmF0b3Jpa2EuY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RhdGlzenRpa2FDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9zdGF0aXN6dGlrYS1ncmFmaWtvbi9zdGF0aXN6dGlrYS9zdGF0aXN6dGlrYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JhZmlrb25lbGVtemVzQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3RhdGlzenRpa2EtZ3JhZmlrb24vZ3JhZmlrb25lbGVtemVzL2dyYWZpa29uZWxlbXplcy5jb21wb25lbnQnXG5cbmltcG9ydCB7IFN6YW1oYWxtYXpva0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1oYWxtYXpvay1oYXR2YW55b3phcy9zemFtaGFsbWF6b2svc3phbWhhbG1hem9rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTemFtaGFsbWF6TXV2ZWxldGVrQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbWhhbG1hem9rLWhhdHZhbnlvemFzL3N6YW1oYWxtYXotbXV2ZWxldGVrL3N6YW1oYWxtYXotbXV2ZWxldGVrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIYXR2YW55b3phc0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1oYWxtYXpvay1oYXR2YW55b3phcy9oYXR2YW55b3phcy9oYXR2YW55b3phcy5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTemFtc29yb3phdG9rQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc29yb3phdG9rL3N6YW1zb3JvemF0b2svc3phbXNvcm96YXRvay5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3phbXRhbmlTb3JvemF0b2tDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9zb3JvemF0b2svc3phbXRhbmktc29yb3phdG9rL3N6YW10YW5pLXNvcm96YXRvay5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBcmFueVN6YXphbGVrQWxhcGZvZ2FsbWFrQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svYXJhbnlvc3NhZy1zemF6YWxlay9hcmFueS1zemF6YWxlay1hbGFwZm9nYWxtYWsvYXJhbnktc3phemFsZWstYWxhcGZvZ2FsbWFrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTem92ZWdlcnRlbG1lemVzQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svYXJhbnlvc3NhZy1zemF6YWxlay9zem92ZWdlcnRlbG1lemVzL3N6b3ZlZ2VydGVsbWV6ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFN6YXphbGVrc3phbWl0YXNDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9hcmFueW9zc2FnLXN6YXphbGVrL3N6YXphbGVrc3phbWl0YXMvc3phemFsZWtzemFtaXRhcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9yZGl0b3R0QXJhbnlvc3NhZ0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL2FyYW55b3NzYWctc3phemFsZWsvZm9yZGl0b3R0LWFyYW55b3NzYWcvZm9yZGl0b3R0LWFyYW55b3NzYWcuY29tcG9uZW50JztcblxuaW1wb3J0IHsgT3N6dG9Ub2Jic3pvcm9zQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbWVsbWVsZXQtb3N6dGhhdG9zYWcvb3N6dG8tdG9iYnN6b3Jvcy9vc3p0by10b2Jic3pvcm9zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWduYWd5b2JiTGVna2lzZWJiQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbWVsbWVsZXQtb3N6dGhhdG9zYWcvbGVnbmFneW9iYi1sZWdraXNlYmIvbGVnbmFneW9iYi1sZWdraXNlYmIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVGFqZWtvem9kYXNLb29yZGluYXRhcmVuZHN6ZXJiZW5Db21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9rb29yZGluYXRhLWxpbmVhcmlzLWZ1Z2d2ZW55ZWsvdGFqZWtvem9kYXMta29vcmRpbmF0YXJlbmRzemVyYmVuL3RhamVrb3pvZGFzLWtvb3JkaW5hdGFyZW5kc3plcmJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZWFyaXNGdWdndmVueWVrQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2sva29vcmRpbmF0YS1saW5lYXJpcy1mdWdndmVueWVrL2xpbmVhcmlzLWZ1Z2d2ZW55ZWsvbGluZWFyaXMtZnVnZ3Zlbnllay5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50Jztcbi8vIGltcG9ydCB7ICB9IGZyb20gJy4vdGVtYWtvcm9rLy5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi90ZW1ha29yb2svLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyAgfSBmcm9tICcuL3RlbWFrb3Jvay8uY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmQgfSBmcm9tICcuL3NoYXJlZC9ndWFyZHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnYWJvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnY29udGFjdCcsXG4gICAgICAgIGNvbXBvbmVudDogQ29udGFjdENvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCJyZWdpc3RlclwiLFxuICAgICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgcGF0aDogJ3RlbWFrb3JvaycsXG4gICAgICAgIGNvbXBvbmVudDogVGVtYWtvcm9rQ29tcG9uZW50LFxuICAgICAgICBjYW5BY3RpdmF0ZTogW0NhbkFjdGl2YXRlVmlhQXV0aEd1YXJkXSxcbiAgICAgICAgY2FuQWN0aXZhdGVDaGlsZDogW0NhbkFjdGl2YXRlVmlhQXV0aEd1YXJkXSxcbiAgICAgICAgLy8gbG9hZENoaWxkcmVuOiAnLi90ZW1ha29yb2svdGVtYWtvcm9rLXJvdXRpbmcubW9kdWxlI1RlbWFrb3Jva1JvdXRpbmdNb2R1bGUnXG4gICAgICB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svOmlkJywgY29tcG9uZW50OiBUZW1ha29yQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLXRlcm1lc3pldGVzLXN6YW1va2thbCcsIGNvbXBvbmVudDogTXV2ZWxldGVrVGVybWVzemV0ZXNTemFtb2trYWxDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zemFtb2xhc2kta2VzenNlZy9tdXZlbGV0ZWstZWdlc3otc3phbW9ra2FsJywgY29tcG9uZW50OiBNdXZlbGV0ZWtFZ2VzelN6YW1va2thbENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1yYWNpb25hbGlzLXN6YW1va2thbCcsIGNvbXBvbmVudDogTXV2ZWxldGVrUmFjaW9uYWxpc1N6YW1va2thbENvbXBvbmVudCB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svbWVydGVrdmFsdGFzL2hvc3N6LXRlcnVsZXQtdGVyZm9nYXQtdXInLCBjb21wb25lbnQ6IEhvc3N6VGVydWxldFRlcmZvZ2F0VXJDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9tZXJ0ZWt2YWx0YXMvaWRvLXRvbWVnLWVneWViJywgY29tcG9uZW50OiBJZG9Ub21lZ0VneWViQ29tcG9uZW50IH0sXG5cbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS9oYWxtYXotbG9naWthJywgY29tcG9uZW50OiBIYWxtYXpMb2dpa2FDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS9rb21iaW5hdG9yaWthJywgY29tcG9uZW50OiBLb21iaW5hdG9yaWthQ29tcG9uZW50IH0sXG5cbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zdGF0aXN6dGlrYS1ncmFmaWtvbi9zdGF0aXN6dGlrYScsIGNvbXBvbmVudDogU3RhdGlzenRpa2FDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zdGF0aXN6dGlrYS1ncmFmaWtvbi9ncmFmaWtvbmVsZW16ZXMnLCBjb21wb25lbnQ6IEdyYWZpa29uZWxlbXplc0NvbXBvbmVudCB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbWhhbG1hem9rLWhhdHZhbnlvemFzL3N6YW1oYWxtYXpvaycsIGNvbXBvbmVudDogU3phbWhhbG1hem9rQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbWhhbG1hem9rLWhhdHZhbnlvemFzL3N6YW1oYWxtYXotbXV2ZWxldGVrJywgY29tcG9uZW50OiBTemFtaGFsbWF6TXV2ZWxldGVrQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbWhhbG1hem9rLWhhdHZhbnlvemFzL2hhdHZhbnlvemFzJywgY29tcG9uZW50OiBIYXR2YW55b3phc0NvbXBvbmVudCB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc29yb3phdG9rL3N6YW1zb3JvemF0b2snLCBjb21wb25lbnQ6IFN6YW1zb3JvemF0b2tDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zb3JvemF0b2svc3phbXRhbmktc29yb3phdG9rJywgY29tcG9uZW50OiBTemFtdGFuaVNvcm96YXRva0NvbXBvbmVudCB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svYXJhbnlvc3NhZy1zemF6YWxlay9hcmFueS1zemF6YWxlay1hbGFwZm9nYWxtYWsnLCBjb21wb25lbnQ6IEFyYW55U3phemFsZWtBbGFwZm9nYWxtYWtDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9hcmFueW9zc2FnLXN6YXphbGVrL3N6b3ZlZ2VydGVsbWV6ZXMnLCBjb21wb25lbnQ6IFN6b3ZlZ2VydGVsbWV6ZXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9hcmFueW9zc2FnLXN6YXphbGVrL3N6YXphbGVrc3phbWl0YXMnLCBjb21wb25lbnQ6IFN6YXphbGVrc3phbWl0YXNDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9hcmFueW9zc2FnLXN6YXphbGVrL2ZvcmRpdG90dC1hcmFueW9zc2FnJywgY29tcG9uZW50OiBGb3JkaXRvdHRBcmFueW9zc2FnQ29tcG9uZW50IH0sXG4gICAgICBcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zemFtZWxtZWxldC1vc3p0aGF0b3NhZy9vc3p0by10b2Jic3pvcm9zJywgY29tcG9uZW50OiBPc3p0b1RvYmJzem9yb3NDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zemFtZWxtZWxldC1vc3p0aGF0b3NhZy9sZWduYWd5b2JiLWxlZ2tpc2ViYicsIGNvbXBvbmVudDogTGVnbmFneW9iYkxlZ2tpc2ViYkNvbXBvbmVudCB9LFxuXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2sva29vcmRpbmF0YS1saW5lYXJpcy1mdWdndmVueWVrL3RhamVrb3pvZGFzLWtvb3JkaW5hdGFyZW5kc3plcmJlbicsIGNvbXBvbmVudDogVGFqZWtvem9kYXNLb29yZGluYXRhcmVuZHN6ZXJiZW5Db21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9rb29yZGluYXRhLWxpbmVhcmlzLWZ1Z2d2ZW55ZWsvbGluZWFyaXMtZnVnZ3ZlbnllaycsIGNvbXBvbmVudDogTGluZWFyaXNGdWdndmVueWVrQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svJywgY29tcG9uZW50OiBDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay8nLCBjb21wb25lbnQ6IENvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rLycsIGNvbXBvbmVudDogQ29tcG9uZW50IH0sXG4gICAgXSlcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmRdLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcblxuLypcblxuTGF6eWxvYWQgdGVtYWtvcm9rIGNvbXBvbmVudHMhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxuXG4qL1xuXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==