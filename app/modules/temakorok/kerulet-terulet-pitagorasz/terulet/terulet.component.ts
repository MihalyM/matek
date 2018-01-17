import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'terulet',
    templateUrl: 'modules/temakorok/kerulet-terulet-pitagorasz/terulet/terulet.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeruletComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
