import {map} from 'rxjs/operators/map';
import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';

import {AppState} from '../../store/app.store';
import {
  AddFavQuote,
  Quote,
  Quotes,
  selectFavQuoteEntities,
  RemoveFavQuote
} from '../../store/quote';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage {
  quoteGroup: Quotes;

  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.get('quoteGroup');
  }

  onAddToFav(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Add Quote?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go a head',
          handler: () =>
            this.store.dispatch<AddFavQuote>({
              type: '[Quote] Add Fav Quote',
              payload: selectedQuote
            })
        },
        {text: 'No, I changed my mind!'}
      ]
    });

    alert.present();
  }

  onRemoveFromFav(quote: Quote) {
    this.store.dispatch<RemoveFavQuote>({type: '[Quote] Remove Fav Quote', payload: quote});
  }

  isFavorite(quote: Quote) {
    return this.store.select(selectFavQuoteEntities).pipe(map(dict => !!dict[quote.id]));
  }
}
