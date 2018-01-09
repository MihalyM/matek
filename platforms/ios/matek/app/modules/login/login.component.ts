import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";

// https://www.thepolyglotdeveloper.com/2017/07/simple-login-registration-nativescript-angular-mobile-app/

@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "login.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

    public input: any = {
        email: '',
        password: ''
    };

    public constructor(private router: RouterExtensions) {}

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/temakorok"], { clearHistory: true });
        }
    }

    public login() {
        if(this.input.email && this.input.password) {
            let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if(this.input.email == account.email && this.input.password == account.password) {
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/temakorok"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Incorrect Credentials!");
            }
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

}
