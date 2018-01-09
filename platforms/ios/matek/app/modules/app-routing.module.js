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
// import { SzamolasiKeszsegComponent } from './temakorok/szamolasi-keszseg/szamolasi-keszseg.component';
var muveletek_termeszetes_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component");
var muveletek_egesz_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component");
var muveletek_racionalis_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component");
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
var guards_1 = require("./shared/guards");
var AppRoutingModule = (function () {
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
                    canActivateChild: [guards_1.CanActivateViaAuthGuard]
                },
                { path: 'temakorok/:id', component: temakor_component_1.TemakorComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal', component: muveletek_termeszetes_szamokkal_component_1.MuveletekTermeszetesSzamokkalComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal', component: muveletek_egesz_szamokkal_component_1.MuveletekEgeszSzamokkalComponent },
                { path: 'temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal', component: muveletek_racionalis_szamokkal_component_1.MuveletekRacionalisSzamokkalComponent },
            ])
        ],
        providers: [guards_1.CanActivateViaAuthGuard],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLHVFQUFxRTtBQUNyRSxtRUFBaUU7QUFFakUseUdBQXlHO0FBQ3pHLHFLQUFpSztBQUNqSyxtSkFBK0k7QUFDL0ksa0tBQThKO0FBRzlKLDJGQUEyRjtBQUMzRiw0SUFBNEk7QUFDNUksa0hBQWtIO0FBQ2xILDhIQUE4SDtBQUM5SCxrRkFBa0Y7QUFDbEYsK0dBQStHO0FBQy9HLDJIQUEySDtBQUMzSCwrSUFBK0k7QUFDL0ksa0hBQWtIO0FBQ2xILCtHQUErRztBQUMvRyw0R0FBNEc7QUFDNUcsMkZBQTJGO0FBQzNGLG1JQUFtSTtBQUNuSSxzR0FBc0c7QUFFdEcsMENBQTBEO0FBdUQxRCxJQUFhLGdCQUFnQjtJQUE3QjtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksZ0JBQWdCO0lBckQ1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUM7Z0JBQy9CO29CQUNFLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSw4QkFBYTtpQkFDekI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsU0FBUyxFQUFFLGdDQUFjO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixTQUFTLEVBQUUsb0NBQWdCO2lCQUM1QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsZ0NBQWM7aUJBQzFCO2dCQUNEO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixTQUFTLEVBQUUsc0NBQWlCO2lCQUM3QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsU0FBUyxFQUFFLHdDQUFrQjtvQkFDN0IsV0FBVyxFQUFFLENBQUMsZ0NBQXVCLENBQUM7b0JBQ3RDLGdCQUFnQixFQUFFLENBQUMsZ0NBQXVCLENBQUM7aUJBQzVDO2dCQUNELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Z0JBQ3RELEVBQUUsSUFBSSxFQUFFLDZEQUE2RCxFQUFFLFNBQVMsRUFBRSxrRkFBc0MsRUFBRTtnQkFDMUgsRUFBRSxJQUFJLEVBQUUsdURBQXVELEVBQUUsU0FBUyxFQUFFLHNFQUFnQyxFQUFFO2dCQUM5RyxFQUFFLElBQUksRUFBRSw0REFBNEQsRUFBRSxTQUFTLEVBQUUsZ0ZBQXFDLEVBQUU7YUFnQnpILENBQUM7U0FDSDtRQUNELFNBQVMsRUFBRSxDQUFDLGdDQUF1QixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3BDLENBQUM7R0FDVyxnQkFBZ0IsQ0FFNUI7QUFGWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVtYWtvcm9rQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svdGVtYWtvcm9rLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1ha29yQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svdGVtYWtvci5jb21wb25lbnQnO1xuXG4vLyBpbXBvcnQgeyBTemFtb2xhc2lLZXN6c2VnQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvc3phbW9sYXNpLWtlc3pzZWcuY29tcG9uZW50JztcbmltcG9ydCB7IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLXRlcm1lc3pldGVzLXN6YW1va2thbC9tdXZlbGV0ZWstdGVybWVzemV0ZXMtc3phbW9ra2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdXZlbGV0ZWtFZ2VzelN6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1lZ2Vzei1zemFtb2trYWwvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXV2ZWxldGVrUmFjaW9uYWxpc1N6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1yYWNpb25hbGlzLXN6YW1va2thbC9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwuY29tcG9uZW50JztcblxuXG4vLyBpbXBvcnQgeyBNZXJ0ZWt2YWx0YXNDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9tZXJ0ZWt2YWx0YXMvbWVydGVrdmFsdGFzLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBIYWxtYXpva0xvZ2lrYUtvbWJpbmF0b3Jpa2FDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS9oYWxtYXpvay1sb2dpa2Eta29tYmluYXRvcmlrYS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgU3RhdGlzenRpa2FHcmFmaWtvbkNvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N0YXRpc3p0aWthLWdyYWZpa29uL3N0YXRpc3p0aWthLWdyYWZpa29uLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBTemFtaGFsbWF6b2tIYXR2YW55b3phc0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1oYWxtYXpvay1oYXR2YW55b3phcy9zemFtaGFsbWF6b2staGF0dmFueW96YXMuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFNvcm96YXRva0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3Nvcm96YXRvay9zb3JvemF0b2suY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEFyYW55b3NzYWdTemF6YWxla0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL2FyYW55b3NzYWctc3phemFsZWsvYXJhbnlvc3NhZy1zemF6YWxlay5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgU3phbWVsbWVsZXRPc3p0aGF0b3NhZ0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1lbG1lbGV0LW9zenRoYXRvc2FnL3N6YW1lbG1lbGV0LW9zenRoYXRvc2FnLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBLb29yZGluYXRhTGluZWFyaXNGdWdndmVueWVrQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2sva29vcmRpbmF0YS1saW5lYXJpcy1mdWdndmVueWVrL2tvb3JkaW5hdGEtbGluZWFyaXMtZnVnZ3Zlbnllay5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQWxnZWJyYWlLaWZlamV6ZXNla0NvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL2FsZ2VicmFpLWtpZmVqZXplc2VrL2FsZ2VicmFpLWtpZmVqZXplc2VrLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBFbHNvZm9rdUVneWVubGV0ZWtDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9lbHNvZm9rdS1lZ3llbmxldGVrL2Vsc29mb2t1LWVneWVubGV0ZWsuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFN6b3ZlZ2VzRmVsYWRhdG9rQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3pvdmVnZXMtZmVsYWRhdG9rL3N6b3ZlZ2VzLWZlbGFkYXRvay5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgU2lrZ2VvbWV0cmlhQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc2lrZ2VvbWV0cmlhL3Npa2dlb21ldHJpYS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgS2VydWxldFRlcnVsZXRQaXRhZ29yYXN6Q29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2sva2VydWxldC10ZXJ1bGV0LXBpdGFnb3Jhc3ova2VydWxldC10ZXJ1bGV0LXBpdGFnb3Jhc3ouY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEZlbHN6aW5UZXJmb2dhdENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL2ZlbHN6aW4tdGVyZm9nYXQvZmVsc3ppbi10ZXJmb2dhdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZCB9IGZyb20gJy4vc2hhcmVkL2d1YXJkcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjb250YWN0JyxcbiAgICAgICAgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBwYXRoOiAndGVtYWtvcm9rJyxcbiAgICAgICAgY29tcG9uZW50OiBUZW1ha29yb2tDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmRdLFxuICAgICAgICBjYW5BY3RpdmF0ZUNoaWxkOiBbQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmRdXG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rLzppZCcsIGNvbXBvbmVudDogVGVtYWtvckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay10ZXJtZXN6ZXRlcy1zemFtb2trYWwnLCBjb21wb25lbnQ6IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbCcsIGNvbXBvbmVudDogTXV2ZWxldGVrRWdlc3pTemFtb2trYWxDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zemFtb2xhc2kta2VzenNlZy9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwnLCBjb21wb25lbnQ6IE11dmVsZXRla1JhY2lvbmFsaXNTemFtb2trYWxDb21wb25lbnQgfSxcblxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL21lcnRla3ZhbHRhcycsIGNvbXBvbmVudDogTWVydGVrdmFsdGFzQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svaGFsbWF6b2stbG9naWthLWtvbWJpbmF0b3Jpa2EnLCBjb21wb25lbnQ6IEhhbG1hem9rTG9naWthS29tYmluYXRvcmlrYUNvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL3N0YXRpc3p0aWthLWdyYWZpa29uJywgY29tcG9uZW50OiBTdGF0aXN6dGlrYUdyYWZpa29uQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svc3phbWhhbG1hem9rLWhhdHZhbnlvemFzJywgY29tcG9uZW50OiBTemFtaGFsbWF6b2tIYXR2YW55b3phc0NvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL3Nvcm96YXRvaycsIGNvbXBvbmVudDogU29yb3phdG9rQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svYXJhbnlvc3NhZy1zemF6YWxlaycsIGNvbXBvbmVudDogQXJhbnlvc3NhZ1N6YXphbGVrQ29tcG9uZW50IH0sXG4gICAgICAvLyB7IHBhdGg6ICd0ZW1ha29yb2svc3phbWVsbWVsZXQtb3N6dGhhdG9zYWcnLCBjb21wb25lbnQ6IFN6YW1lbG1lbGV0T3N6dGhhdG9zYWdDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay9rb29yZGluYXRhLWxpbmVhcmlzLWZ1Z2d2ZW55ZWsnLCBjb21wb25lbnQ6IEtvb3JkaW5hdGFMaW5lYXJpc0Z1Z2d2ZW55ZWtDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay9hbGdlYnJhaS1raWZlamV6ZXNlaycsIGNvbXBvbmVudDogQWxnZWJyYWlLaWZlamV6ZXNla0NvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL2Vsc29mb2t1LWVneWVubGV0ZWsnLCBjb21wb25lbnQ6IEVsc29mb2t1RWd5ZW5sZXRla0NvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL3N6b3ZlZ2VzLWZlbGFkYXRvaycsIGNvbXBvbmVudDogU3pvdmVnZXNGZWxhZGF0b2tDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay9zaWtnZW9tZXRyaWEnLCBjb21wb25lbnQ6IFNpa2dlb21ldHJpYUNvbXBvbmVudCB9LFxuICAgICAgLy8geyBwYXRoOiAndGVtYWtvcm9rL2tlcnVsZXQtdGVydWxldC1waXRhZ29yYXN6JywgY29tcG9uZW50OiBLZXJ1bGV0VGVydWxldFBpdGFnb3Jhc3pDb21wb25lbnQgfSxcbiAgICAgIC8vIHsgcGF0aDogJ3RlbWFrb3Jvay9mZWxzemluLXRlcmZvZ2F0JywgY29tcG9uZW50OiBGZWxzemluVGVyZm9nYXRDb21wb25lbnQgfSxcbiAgICBdKVxuICBdLFxuICBwcm92aWRlcnM6IFtDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=