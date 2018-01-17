import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { CompileAnimationGroupMetadata } from '@angular/compiler';

@Component({
  selector: 'home',
  styleUrls: ['modules/home/home.component.css'],
  templateUrl: 'modules/home/home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public account;
  public constructor(private router: RouterExtensions) {}

  ngOnInit() {
    let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
    if (account && account.email) {
      account = {
        temakorok: []
      };
      // ApplicationSettings.setString("account", JSON.stringify(this.account));
      this.account = account;
    }
  }
}
