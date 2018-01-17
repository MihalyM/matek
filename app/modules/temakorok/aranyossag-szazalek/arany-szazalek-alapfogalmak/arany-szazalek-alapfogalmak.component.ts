import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'arany-szazalek-alapfogalmak',
    templateUrl: 'modules/temakorok/aranyossag-szazalek/arany-szazalek-alapfogalmak/arany-szazalek-alapfogalmak.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AranySzazalekAlapfogalmakComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
