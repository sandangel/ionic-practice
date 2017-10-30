import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import quotes from '../../data/quotes';
import {Quotes} from '../../store/quote/quotes.interface';
import {QuotesPage} from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  quoteCollection: Quotes[];

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  toQuotesPage(quoteGroup: Quotes) {
    this.navCtrl.push(QuotesPage, {quoteGroup});
  }
}
