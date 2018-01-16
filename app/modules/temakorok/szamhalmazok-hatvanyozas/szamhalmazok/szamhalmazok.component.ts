import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'statisztika',
    templateUrl: 'modules/temakorok/szamhalmazok-hatvanyozas/szamhalmazok/szamhalmazok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamhalmazokComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
