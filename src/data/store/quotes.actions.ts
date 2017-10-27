import {Quote} from './quotes.interface';

export interface AddFavQuote {
  readonly type: '[Quote] Add Fav Quote';
  payload: Quote;
}

export interface RemoveFavQuote {
  readonly type: '[Quote] Remove Fav Quote';
  payload: Quote;
}

export interface SelectQuote {
  readonly type: '[Quote] Select Quote';
  payload: Quote;
}

export type QuoteActions = AddFavQuote | RemoveFavQuote | SelectQuote;
