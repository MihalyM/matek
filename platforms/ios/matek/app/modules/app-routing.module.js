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
                { path: 'temakorok/mertekvaltas/hossz-terulet-terfogat-ur', component: hossz_terulet_terfogat_ur_component_1.HosszTeruletTerfogatUrComponent },
                { path: 'temakorok/mertekvaltas/ido-tomeg-egyeb', component: ido_tomeg_egyeb_component_1.IdoTomegEgyebComponent },
            ])
        ],
        providers: [guards_1.CanActivateViaAuthGuard],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLHVFQUFxRTtBQUNyRSxtRUFBaUU7QUFFakUscUtBQWlLO0FBQ2pLLG1KQUErSTtBQUMvSSxrS0FBOEo7QUFFOUosOElBQXlJO0FBQ3pJLGdIQUE0RztBQUU1RywwQ0FBMEQ7QUEyQzFELElBQWEsZ0JBQWdCO0lBQTdCO0lBRUEsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxnQkFBZ0I7SUF6QzVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLE9BQU8sQ0FBQztnQkFDL0I7b0JBQ0UsSUFBSSxFQUFFLEVBQUU7b0JBQ1IsU0FBUyxFQUFFLDhCQUFhO2lCQUN6QjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixTQUFTLEVBQUUsZ0NBQWM7aUJBQzFCO2dCQUNEO29CQUNFLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSxvQ0FBZ0I7aUJBQzVCO2dCQUNEO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLFNBQVMsRUFBRSxnQ0FBYztpQkFDMUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxzQ0FBaUI7aUJBQzdCO2dCQUNEO29CQUNFLElBQUksRUFBRSxXQUFXO29CQUNqQixTQUFTLEVBQUUsd0NBQWtCO29CQUM3QixXQUFXLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQztvQkFDdEMsZ0JBQWdCLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQztpQkFDNUM7Z0JBQ0QsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtnQkFDdEQsRUFBRSxJQUFJLEVBQUUsNkRBQTZELEVBQUUsU0FBUyxFQUFFLGtGQUFzQyxFQUFFO2dCQUMxSCxFQUFFLElBQUksRUFBRSx1REFBdUQsRUFBRSxTQUFTLEVBQUUsc0VBQWdDLEVBQUU7Z0JBQzlHLEVBQUUsSUFBSSxFQUFFLDREQUE0RCxFQUFFLFNBQVMsRUFBRSxnRkFBcUMsRUFBRTtnQkFFeEgsRUFBRSxJQUFJLEVBQUUsa0RBQWtELEVBQUUsU0FBUyxFQUFFLHFFQUErQixFQUFFO2dCQUN4RyxFQUFFLElBQUksRUFBRSx3Q0FBd0MsRUFBRSxTQUFTLEVBQUUsa0RBQXNCLEVBQUU7YUFDdEYsQ0FBQztTQUNIO1FBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQXVCLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1ha29yb2tDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yb2suY29tcG9uZW50JztcbmltcG9ydCB7IFRlbWFrb3JDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLXRlcm1lc3pldGVzLXN6YW1va2thbC9tdXZlbGV0ZWstdGVybWVzemV0ZXMtc3phbW9ra2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdXZlbGV0ZWtFZ2VzelN6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1lZ2Vzei1zemFtb2trYWwvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXV2ZWxldGVrUmFjaW9uYWxpc1N6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1yYWNpb25hbGlzLXN6YW1va2thbC9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSG9zc3pUZXJ1bGV0VGVyZm9nYXRVckNvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL21lcnRla3ZhbHRhcy9ob3Nzei10ZXJ1bGV0LXRlcmZvZ2F0LXVyL2hvc3N6LXRlcnVsZXQtdGVyZm9nYXQtdXIuY29tcG9uZW50JztcbmltcG9ydCB7IElkb1RvbWVnRWd5ZWJDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9tZXJ0ZWt2YWx0YXMvaWRvLXRvbWVnLWVneWViL2lkby10b21lZy1lZ3llYi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZVZpYUF1dGhHdWFyZCB9IGZyb20gJy4vc2hhcmVkL2d1YXJkcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhYm91dCcsXG4gICAgICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdjb250YWN0JyxcbiAgICAgICAgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcInJlZ2lzdGVyXCIsXG4gICAgICAgIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnRcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICBwYXRoOiAndGVtYWtvcm9rJyxcbiAgICAgICAgY29tcG9uZW50OiBUZW1ha29yb2tDb21wb25lbnQsXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmRdLFxuICAgICAgICBjYW5BY3RpdmF0ZUNoaWxkOiBbQ2FuQWN0aXZhdGVWaWFBdXRoR3VhcmRdXG4gICAgICB9LFxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rLzppZCcsIGNvbXBvbmVudDogVGVtYWtvckNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay10ZXJtZXN6ZXRlcy1zemFtb2trYWwnLCBjb21wb25lbnQ6IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbCcsIGNvbXBvbmVudDogTXV2ZWxldGVrRWdlc3pTemFtb2trYWxDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3RlbWFrb3Jvay9zemFtb2xhc2kta2VzenNlZy9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwnLCBjb21wb25lbnQ6IE11dmVsZXRla1JhY2lvbmFsaXNTemFtb2trYWxDb21wb25lbnQgfSxcblxuICAgICAgeyBwYXRoOiAndGVtYWtvcm9rL21lcnRla3ZhbHRhcy9ob3Nzei10ZXJ1bGV0LXRlcmZvZ2F0LXVyJywgY29tcG9uZW50OiBIb3NzelRlcnVsZXRUZXJmb2dhdFVyQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0ZW1ha29yb2svbWVydGVrdmFsdGFzL2lkby10b21lZy1lZ3llYicsIGNvbXBvbmVudDogSWRvVG9tZWdFZ3llYkNvbXBvbmVudCB9LFxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVyczogW0NhbkFjdGl2YXRlVmlhQXV0aEd1YXJkXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7XG5cbn1cbiJdfQ==