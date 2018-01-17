import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'szamsorozatok',
    templateUrl: 'modules/temakorok/sorozatok/szamsorozatok/szamsorozatok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SzamsorozatokComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
