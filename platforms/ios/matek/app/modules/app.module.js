"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var contact_component_1 = require("./contact/contact.component");
var subjects_component_1 = require("./subjects/subjects.component");
var trigonometria_component_1 = require("./subjects/trigonometria/trigonometria.component");
var pitagorasz_tetel_component_1 = require("./subjects/trigonometria/pitagorasz-tetel/pitagorasz-tetel.component");
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
            subjects_component_1.SubjectsComponent,
            trigonometria_component_1.TrigonometriaComponent,
            pitagorasz_tetel_component_1.PitagoraszTetelComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxpRUFBK0Q7QUFDL0Qsb0VBQWtFO0FBQ2xFLDRGQUEwRjtBQUMxRixtSEFBZ0g7QUFDaEgsbUNBQXdDO0FBc0J4QyxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUFwQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIscUNBQWdCO1lBQ2hCLHFCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCxnQ0FBYztZQUNkLHNDQUFpQjtZQUNqQixvQ0FBZ0I7WUFDaEIsc0NBQWlCO1lBQ2pCLGdEQUFzQjtZQUN0QixxREFBd0I7U0FDekI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBRXJCO0FBRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRhY3RDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3ViamVjdHNDb21wb25lbnQgfSBmcm9tICcuL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmlnb25vbWV0cmlhQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy90cmlnb25vbWV0cmlhL3RyaWdvbm9tZXRyaWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBpdGFnb3Jhc3pUZXRlbENvbXBvbmVudCB9IGZyb20gJy4vc3ViamVjdHMvdHJpZ29ub21ldHJpYS9waXRhZ29yYXN6LXRldGVsL3BpdGFnb3Jhc3otdGV0ZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICAgIFN1YmplY3RzQ29tcG9uZW50LFxuICAgIFRyaWdvbm9tZXRyaWFDb21wb25lbnQsXG4gICAgUGl0YWdvcmFzelRldGVsQ29tcG9uZW50XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuIl19