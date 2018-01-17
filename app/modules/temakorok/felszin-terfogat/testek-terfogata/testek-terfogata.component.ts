import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'testek-terfogata',
    templateUrl: 'modules/temakorok/felszin-terfogat/testek-terfogata/testek-terfogata.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestekTerfogataComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
