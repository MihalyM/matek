import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppService } from '../app.service';

@Component({
    selector: 'temakorok',
    templateUrl: 'modules/temakorok/temakorok.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemakorokComponent implements OnInit, OnDestroy {
  private temakorokSub: Subscription;
  temakorok: Array<any> = [];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.temakorokSub = this.appService.temakorok.subscribe((next) => {
      this.temakorok = next;
    });
  }

  ngOnDestroy() {
    if (this.temakorokSub) {
      this.temakorokSub.unsubscribe();
    }
  }
}
