import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'felszin-terfogat-alapfogalmak',
    templateUrl: 'modules/temakorok/felszin-terfogat/felszin-terfogat-alapfogalmak/felszin-terfogat-alapfogalmak.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FelszinTerfogatAlapfogalmakComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
