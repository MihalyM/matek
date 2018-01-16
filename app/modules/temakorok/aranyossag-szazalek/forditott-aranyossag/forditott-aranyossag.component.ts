import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'forditott-aranyossag',
    templateUrl: 'modules/temakorok/aranyossag-szazalek/forditott-aranyossag/forditott-aranyossag.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForditottAranyossagComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
