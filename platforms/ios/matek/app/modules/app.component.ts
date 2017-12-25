import { Component } from "@angular/core";
import * as ApplicationSettings from "application-settings";

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {
  constructor() {
    ApplicationSettings.setBoolean("authenticated", false)
  }
}
