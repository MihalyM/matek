import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'kerulet',
    templateUrl: 'modules/temakorok/kerulet-terulet-pitagorasz/kerulet/kerulet.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeruletComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
