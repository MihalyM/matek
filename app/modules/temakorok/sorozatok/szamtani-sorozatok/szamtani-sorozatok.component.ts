import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szamtani-sorozatok',
    templateUrl: 'modules/temakorok/sorozatok/szamtani-sorozatok/szamtani-sorozatok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamtaniSorozatokComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
