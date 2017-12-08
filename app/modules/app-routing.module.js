"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var subjects_component_1 = require("./subjects/subjects.component");
var trigonometria_component_1 = require("./subjects/trigonometria/trigonometria.component");
var pitagorasz_tetel_component_1 = require("./subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: "register", component: register_component_1.RegisterComponent },
                { path: 'subjects', component: subjects_component_1.SubjectsComponent },
                { path: 'subjects/trigonometria', component: trigonometria_component_1.TrigonometriaComponent },
                { path: 'subjects/trigonometria/pitagorasz-tetel', component: pitagorasz_tetel_component_1.PitagoraszTetelComponent }
            ])
        ],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx3REFBc0Q7QUFDdEQsMkRBQXlEO0FBQ3pELGlFQUErRDtBQUMvRCwyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLG9FQUFrRTtBQUNsRSw0RkFBMEY7QUFDMUYsbUhBQWdIO0FBaUJoSCxJQUFhLGdCQUFnQjtJQUE3QjtJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksZ0JBQWdCO0lBZjVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGlDQUF3QixDQUFDLE9BQU8sQ0FBQztnQkFDL0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO2dCQUN0QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Z0JBQzVDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7Z0JBQ2hELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtnQkFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtnQkFDbEQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtnQkFDbEQsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxFQUFFLGdEQUFzQixFQUFFO2dCQUNyRSxFQUFFLElBQUksRUFBRSx5Q0FBeUMsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7YUFDekYsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7S0FDcEMsQ0FBQztHQUNXLGdCQUFnQixDQUU1QjtBQUZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vc3ViamVjdHMvc3ViamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFRyaWdvbm9tZXRyaWFDb21wb25lbnQgfSBmcm9tICcuL3N1YmplY3RzL3RyaWdvbm9tZXRyaWEvdHJpZ29ub21ldHJpYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGl0YWdvcmFzelRldGVsQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy90cmlnb25vbWV0cmlhL3BpdGFnb3Jhc3otdGV0ZWwvcGl0YWdvcmFzei10ZXRlbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoW1xuICAgICAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3N1YmplY3RzJywgY29tcG9uZW50OiBTdWJqZWN0c0NvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc3ViamVjdHMvdHJpZ29ub21ldHJpYScsIGNvbXBvbmVudDogVHJpZ29ub21ldHJpYUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnc3ViamVjdHMvdHJpZ29ub21ldHJpYS9waXRhZ29yYXN6LXRldGVsJywgY29tcG9uZW50OiBQaXRhZ29yYXN6VGV0ZWxDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xuXG59XG4iXX0=