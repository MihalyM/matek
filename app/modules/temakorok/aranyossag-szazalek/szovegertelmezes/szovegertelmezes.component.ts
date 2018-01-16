import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szovegertelmezes',
    templateUrl: 'modules/temakorok/aranyossag-szazalek/szovegertelmezes/szovegertelmezes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzovegertelmezesComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
