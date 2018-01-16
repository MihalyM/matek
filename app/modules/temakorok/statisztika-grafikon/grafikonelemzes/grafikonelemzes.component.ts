import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'grafikonelemzes',
    templateUrl: 'modules/temakorok/statisztika-grafikon/grafikonelemzes/grafikonelemzes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrafikonelemzesComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
