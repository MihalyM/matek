import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'sikgeometria-haromszogek',
    templateUrl: 'modules/temakorok/sikgeometria/sikgeometria-haromszogek/sikgeometria-haromszogek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SikgeometriaHaromszogekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
