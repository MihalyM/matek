"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var app_service_1 = require("./app.service");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var contact_component_1 = require("./contact/contact.component");
var temakorok_component_1 = require("./temakorok/temakorok.component");
var temakor_component_1 = require("./temakorok/temakor.component");
var muveletek_termeszetes_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-termeszetes-szamokkal/muveletek-termeszetes-szamokkal.component");
var muveletek_egesz_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-egesz-szamokkal/muveletek-egesz-szamokkal.component");
var muveletek_racionalis_szamokkal_component_1 = require("./temakorok/szamolasi-keszseg/muveletek-racionalis-szamokkal/muveletek-racionalis-szamokkal.component");
var hossz_terulet_terfogat_ur_component_1 = require("./temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component");
var ido_tomeg_egyeb_component_1 = require("./temakorok/mertekvaltas/ido-tomeg-egyeb/ido-tomeg-egyeb.component");
var shared_1 = require("./shared");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            app_routing_module_1.AppRoutingModule,
            shared_1.SharedModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            contact_component_1.ContactComponent,
            temakorok_component_1.TemakorokComponent,
            temakor_component_1.TemakorComponent,
            muveletek_termeszetes_szamokkal_component_1.MuveletekTermeszetesSzamokkalComponent,
            muveletek_egesz_szamokkal_component_1.MuveletekEgeszSzamokkalComponent,
            muveletek_racionalis_szamokkal_component_1.MuveletekRacionalisSzamokkalComponent,
            hossz_terulet_terfogat_ur_component_1.HosszTeruletTerfogatUrComponent,
            ido_tomeg_egyeb_component_1.IdoTomegEgyebComponent,
        ],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLDZDQUEyQztBQUMzQyx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUsaUVBQStEO0FBQy9ELHVFQUFxRTtBQUNyRSxtRUFBaUU7QUFFakUscUtBQWlLO0FBQ2pLLG1KQUErSTtBQUMvSSxrS0FBOEo7QUFFOUosOElBQXlJO0FBQ3pJLGdIQUE0RztBQUU1RyxtQ0FBd0M7QUE2QnhDLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQTNCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QixxQ0FBZ0I7WUFDaEIscUJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixnQ0FBYztZQUNkLGdDQUFjO1lBQ2Qsc0NBQWlCO1lBQ2pCLG9DQUFnQjtZQUNoQix3Q0FBa0I7WUFDbEIsb0NBQWdCO1lBRWhCLGtGQUFzQztZQUN0QyxzRUFBZ0M7WUFDaEMsZ0ZBQXFDO1lBRXJDLHFFQUErQjtZQUMvQixrREFBc0I7U0FDdkI7UUFDRCxTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO1FBQ3ZCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZW1ha29yb2tDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yb2suY29tcG9uZW50JztcbmltcG9ydCB7IFRlbWFrb3JDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay90ZW1ha29yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1ha29yb2svc3phbW9sYXNpLWtlc3pzZWcvbXV2ZWxldGVrLXRlcm1lc3pldGVzLXN6YW1va2thbC9tdXZlbGV0ZWstdGVybWVzemV0ZXMtc3phbW9ra2FsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdXZlbGV0ZWtFZ2VzelN6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1lZ2Vzei1zemFtb2trYWwvbXV2ZWxldGVrLWVnZXN6LXN6YW1va2thbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXV2ZWxldGVrUmFjaW9uYWxpc1N6YW1va2thbENvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL3N6YW1vbGFzaS1rZXN6c2VnL211dmVsZXRlay1yYWNpb25hbGlzLXN6YW1va2thbC9tdXZlbGV0ZWstcmFjaW9uYWxpcy1zemFtb2trYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSG9zc3pUZXJ1bGV0VGVyZm9nYXRVckNvbXBvbmVudCB9IGZyb20gJy4vdGVtYWtvcm9rL21lcnRla3ZhbHRhcy9ob3Nzei10ZXJ1bGV0LXRlcmZvZ2F0LXVyL2hvc3N6LXRlcnVsZXQtdGVyZm9nYXQtdXIuY29tcG9uZW50JztcbmltcG9ydCB7IElkb1RvbWVnRWd5ZWJDb21wb25lbnQgfSBmcm9tICcuL3RlbWFrb3Jvay9tZXJ0ZWt2YWx0YXMvaWRvLXRvbWVnLWVneWViL2lkby10b21lZy1lZ3llYi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuL3NoYXJlZCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgICBUZW1ha29yb2tDb21wb25lbnQsXG4gICAgVGVtYWtvckNvbXBvbmVudCxcblxuICAgIE11dmVsZXRla1Rlcm1lc3pldGVzU3phbW9ra2FsQ29tcG9uZW50LFxuICAgIE11dmVsZXRla0VnZXN6U3phbW9ra2FsQ29tcG9uZW50LFxuICAgIE11dmVsZXRla1JhY2lvbmFsaXNTemFtb2trYWxDb21wb25lbnQsXG5cbiAgICBIb3NzelRlcnVsZXRUZXJmb2dhdFVyQ29tcG9uZW50LFxuICAgIElkb1RvbWVnRWd5ZWJDb21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW0FwcFNlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cbiJdfQ==