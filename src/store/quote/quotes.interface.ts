import {EntityState} from '@ngrx/entity';

export interface Quotes {
  category: string;
  quotes: Quote[];
  icon: string;
}

export interface Quote {
  id: string;
  person: string;
  text: string;
}

export interface FavQuoteState extends EntityState<Quote> {
  selectedFavQuote: Quote | null;
}
