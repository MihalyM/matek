import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'elsofoku-egyenlotlensegek',
    templateUrl: 'modules/temakorok/elsofoku-egyenletek/elsofoku-egyenlotlensegek/elsofoku-egyenlotlensegek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElsofokuEgyenlotlensegekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
