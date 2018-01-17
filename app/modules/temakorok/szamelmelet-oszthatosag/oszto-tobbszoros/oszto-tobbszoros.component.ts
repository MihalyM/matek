import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'oszto-tobbszoros',
    templateUrl: 'modules/temakorok/szamelmelet-oszthatosag/oszto-tobbszoros/oszto-tobbszoros.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OsztoTobbszorosComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
