import {SelectQuote} from '../../data/store/quotes.actions';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

import {AppState} from '../../data/app.store';
import {Quote, Quotes, AddFavQuote} from '../../data/store';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: Quotes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private store: Store<AppState>
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.get('quoteGroup');
  }

  onAddToFavorite(selectedQuote: Quote) {
    const quotesPage = this;
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Add Quote?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go a head',
          handler: () =>
            quotesPage.store.dispatch<AddFavQuote>({
              type: '[Quote] Add Fav Quote',
              payload: selectedQuote
            })
        },
        {text: 'No, I changed my mind!', handler: () => console.log('Cancelled')}
      ]
    });

    alert.present();
  }
}
