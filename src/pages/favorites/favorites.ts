import {BackgroundService} from "../../services/background";
import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {IonicPage, ModalController} from "ionic-angular";
import {Observable} from "rxjs/Observable";

import {AppState} from "../../store/app.store";
import {Quote, selectAllFavQuotes, SelectQuote, RemoveFavQuote} from "../../store/quote";
import {QuotePage} from "../quote/quote";
import {Subscription} from "rxjs/Subscription";

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  quoteGroup$: Observable<Quote[]>;
  alterBg: string;
  watch: Subscription;

  constructor(
    private store: Store<AppState>,
    private modalCtrl: ModalController,
    private bgService: BackgroundService
  ) {}

  ngOnInit() {
    this.quoteGroup$ = this.store.select(selectAllFavQuotes);
    this.watch = this.bgService.checked.subscribe(checked => (this.alterBg = checked ? "secondary" : "primary"));
  }

  onViewQuote(quote: Quote) {
    this.store.dispatch<SelectQuote>({
      type: "[Quote] Select Quote",
      payload: quote
    });
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
    modal.onDidDismiss(remove => {
      if (remove) this.onRemoveFromFav(quote);
    });
  }

  onRemoveFromFav(quote: Quote) {
    this.store.dispatch<RemoveFavQuote>({
      type: "[Quote] Remove Fav Quote",
      payload: quote
    });
  }

  ngOnDestroy() {
    this.watch.unsubscribe();
  }

  onclick() {}
}
