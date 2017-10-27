import {AppState} from '../../data/app.store';
import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote, selectAllFavQuotes, RemoveFavQuote} from '../../data/store';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  quoteGroup$: Observable<Quote[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<AppState>
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ngOnInit() {
    this.quoteGroup$ = this.store.select(selectAllFavQuotes);
  }

  onRemoveFromFavorite(quote: Quote) {
    this.store.dispatch<RemoveFavQuote>({type: '[Quote] Remove Fav Quote', payload: quote});
  }
}
