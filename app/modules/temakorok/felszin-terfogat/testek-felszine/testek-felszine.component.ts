import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TemaComponent } from '../../tema.component';
import { AppService } from '../../../app.service';

@Component({
    selector: 'testek-felszine',
    templateUrl: 'modules/temakorok/felszin-terfogat/testek-felszine/testek-felszine.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestekFelszineComponent extends TemaComponent {
  constructor(
    private router: Router,
    private appService: AppService
  ) {
    super(router, appService);
  }
}
