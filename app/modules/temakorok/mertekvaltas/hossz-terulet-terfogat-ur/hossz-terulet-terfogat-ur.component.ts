import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'hossz-terulet-terfogat-ur',
    templateUrl: 'modules/temakorok/mertekvaltas/hossz-terulet-terfogat-ur/hossz-terulet-terfogat-ur.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HosszTeruletTerfogatUrComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
