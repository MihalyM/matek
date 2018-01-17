import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szoveges-altalanos',
    templateUrl: 'modules/temakorok/szoveges-feladatok/szoveges-altalanos/szoveges-altalanos.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzovegesAltalanosComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
