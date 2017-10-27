import {QuotesPage} from '../quotes/quotes';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quotes, Quote} from '../../data/store/quotes.interface';
import quotes from '../../data/quotes';
/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {
  quoteCollection: Quotes[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  toQuotesPage(quoteGroup: Quotes) {
    this.navCtrl.push(QuotesPage, {quoteGroup});
  }
}
