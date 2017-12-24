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
      account.progress = {
        subjects: [
          {
            id: 1,
            title: 'Trigonometria',
            url: '/subjects/trigonometria',
            image: 'trigonometria.png',
            completed: 12,
            total: 16
          },
          {
            id: 2,
            title: 'Geometria',
            url: '/subjects/geometria',
            image: 'geometria.png',
            completed: 3,
            total: 10
          },
          {
            id: 3,
            title: 'Halmazelmélet',
            url: '/subjects/halmazelmelet',
            image: 'halmazelmelet.png',
            completed: 0,
            total: 12
          },
          {
            id: 4,
            title: 'Valószínűségszámítás',
            url: '/subjects/valoszinusegszamitas',
            image: 'valoszinusegszamitas.png',
            completed: 20,
            total: 20
          }
        ]
      };
      // ApplicationSettings.setString("account", JSON.stringify(this.account));
      this.account = account;
    }
  }
}
