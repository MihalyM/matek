import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'elsofoku-egyenletek',
    templateUrl: 'modules/temakorok/elsofoku-egyenletek/elsofoku-egyenletek/elsofoku-egyenletek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElsofokuEgyenletekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
