import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'sikgeometria-egybevagosag',
    templateUrl: 'modules/temakorok/sikgeometria/sikgeometria-egybevagosag/sikgeometria-egybevagosag.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SikgeometriaEgybevagosagComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
