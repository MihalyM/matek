import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'algebrai-kifejezesek',
    templateUrl: 'modules/temakorok/algebrai-kifejezesek/algebrai-kifejezesek/algebrai-kifejezesek.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlgebraiKifejezesekComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
