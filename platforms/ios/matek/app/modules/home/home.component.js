"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var account = JSON.parse(ApplicationSettings.getString("account", "{}"));
        if (account && account.email) {
            account = {
                temakorok: []
            };
            // ApplicationSettings.setString("account", JSON.stringify(this.account));
            this.account = account;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        styleUrls: ['modules/home/home.component.css'],
        templateUrl: 'modules/home/home.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRTtBQUMzRSxzREFBK0Q7QUFDL0QsMERBQTREO0FBUzVELElBQWEsYUFBYTtJQUV4Qix1QkFBMkIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRXZELGdDQUFRLEdBQVI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHO2dCQUNSLFNBQVMsRUFBRSxFQUFFO2FBQ2QsQ0FBQztZQUNGLDBFQUEwRTtZQUMxRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztRQUM5QyxXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBR21DLHlCQUFnQjtHQUZ4QyxhQUFhLENBY3pCO0FBZFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgQ29tcGlsZUFuaW1hdGlvbkdyb3VwTWV0YWRhdGEgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hvbWUnLFxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBhY2NvdW50O1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGFjY291bnQgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjb3VudFwiLCBcInt9XCIpKTtcbiAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LmVtYWlsKSB7XG4gICAgICBhY2NvdW50ID0ge1xuICAgICAgICB0ZW1ha29yb2s6IFtdXG4gICAgICB9O1xuICAgICAgLy8gQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoXCJhY2NvdW50XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuYWNjb3VudCkpO1xuICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==