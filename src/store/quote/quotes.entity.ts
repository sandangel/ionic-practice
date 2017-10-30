import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';

import {Quote, FavQuoteState} from './quotes.interface';

export const favQuoteAdapter: EntityAdapter<Quote> = createEntityAdapter<Quote>({
  selectId: model => model.id,
  sortComparer: false
});

export const favQuoteInitialState: FavQuoteState = favQuoteAdapter.getInitialState({
  selectedFavQuote: null
});
