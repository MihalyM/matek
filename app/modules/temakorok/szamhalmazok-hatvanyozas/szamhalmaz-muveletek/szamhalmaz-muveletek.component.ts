import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'statisztika',
    templateUrl: 'modules/temakorok/szamhalmazok-hatvanyozas/szamhalmaz-muveletek/szamhalmaz-muveletek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamhalmazMuveletekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
