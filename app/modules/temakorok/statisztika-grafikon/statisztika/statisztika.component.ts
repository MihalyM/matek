import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'statisztika',
    templateUrl: 'modules/temakorok/statisztika-grafikon/statisztika/statisztika.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisztikaComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
