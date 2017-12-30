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
var algebrai_kifejezesek_component_1 = require("./subjects/algebrai-kifejezesek/algebrai-kifejezesek.component");
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
            algebrai_kifejezesek_component_1.AlgebraiKifejezesekComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxpRUFBK0Q7QUFDL0Qsb0VBQWtFO0FBQ2xFLGlIQUE4RztBQUM5RyxtQ0FBd0M7QUFxQnhDLElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQW5CckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2QixxQ0FBZ0I7WUFDaEIscUJBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osOEJBQWE7WUFDYixnQ0FBYztZQUNkLGdDQUFjO1lBQ2Qsc0NBQWlCO1lBQ2pCLG9DQUFnQjtZQUNoQixzQ0FBaUI7WUFDakIsNkRBQTRCO1NBQzdCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN1YmplY3RzQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJqZWN0cy9zdWJqZWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWxnZWJyYWlLaWZlamV6ZXNla0NvbXBvbmVudCB9IGZyb20gJy4vc3ViamVjdHMvYWxnZWJyYWkta2lmZWplemVzZWsvYWxnZWJyYWkta2lmZWplemVzZWsuY29tcG9uZW50JztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICAgIFN1YmplY3RzQ29tcG9uZW50LFxuICAgIEFsZ2VicmFpS2lmZWplemVzZWtDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG4iXX0=