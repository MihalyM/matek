import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'halmaz-logika',
    templateUrl: 'modules/temakorok/halmazok-logika-kombinatorika/halmaz-logika/halmaz-logika.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HalmazLogikaComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
