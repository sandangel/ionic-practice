import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IonicPage, ViewController} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

import {AppState} from '../../store/app.store';
import {DeselectQuote, Quote, selectCurrentFavQuote} from '../../store/quote';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  quote$: Observable<Quote>;

  constructor(private viewCtrl: ViewController, private store: Store<AppState>) {}

  ngOnInit() {
    this.quote$ = this.store.select(selectCurrentFavQuote);
  }

  onClose(remove = false) {
    this.store.dispatch<DeselectQuote>({type: '[Quote] Deselect Quote'});
    this.viewCtrl.dismiss(remove);
  }
}
