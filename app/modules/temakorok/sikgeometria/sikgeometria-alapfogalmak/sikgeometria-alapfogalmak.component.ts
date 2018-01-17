import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'sikgeometria-alapfogalmak',
    templateUrl: 'modules/temakorok/sikgeometria/sikgeometria-alapfogalmak/sikgeometria-alapfogalmak.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SikgeometriaAlapfogalmakComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
