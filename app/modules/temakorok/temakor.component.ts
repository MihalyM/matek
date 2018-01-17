import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
    selector: 'temakor',
    templateUrl: 'modules/temakorok/temakor.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemakorComponent implements OnInit {
  temakor: Array<any>;

  constructor(
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.temakor = this.appService.getSubject(this.router.url);
  }
}
