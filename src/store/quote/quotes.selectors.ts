import {createFeatureSelector, createSelector} from '@ngrx/store';

import {favQuoteAdapter} from './quotes.entity';
import {FavQuoteState} from './quotes.interface';

export const getFavQuoteState = createFeatureSelector<FavQuoteState>('quote');
export const {
  selectAll: selectAllFavQuotes,
  selectEntities: selectFavQuoteEntities
} = favQuoteAdapter.getSelectors(getFavQuoteState);

export const selectCurrentFavQuote = createSelector(
  getFavQuoteState,
  (state) => state.selectedFavQuote
);
