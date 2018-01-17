import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'kombinatorika',
    templateUrl: 'modules/temakorok/halmazok-logika-kombinatorika/kombinatorika/kombinatorika.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KombinatorikaComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
