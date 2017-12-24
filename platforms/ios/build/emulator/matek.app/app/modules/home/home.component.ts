import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
  selector: 'home',
  templateUrl: 'modules/home/home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public constructor(private router: RouterExtensions) {}

  ngOnInit() {
  }
}
