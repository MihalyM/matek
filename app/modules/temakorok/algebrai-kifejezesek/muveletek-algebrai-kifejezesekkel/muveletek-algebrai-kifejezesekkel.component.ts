import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'muveletek-algebrai-kifejezesekkel',
    templateUrl: 'modules/temakorok/algebrai-kifejezesek/muveletek-algebrai-kifejezesekkel/muveletek-algebrai-kifejezesekkel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuveletekAlgebraiKifejezesekelkComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
