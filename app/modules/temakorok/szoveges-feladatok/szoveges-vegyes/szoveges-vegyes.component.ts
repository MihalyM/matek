import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szoveges-vegyes',
    templateUrl: 'modules/temakorok/szoveges-feladatok/szoveges-vegyes/szoveges-vegyes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzovegesVegyesComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
