import {favQuoteAdapter} from './quotes.entity';
import {AppState} from '../app.store';
import {FavQuoteState} from './quotes.interface';
import {createSelector, createFeatureSelector} from '@ngrx/store';

export const getFavQuoteState = createFeatureSelector<FavQuoteState>('quote');
export const {
  selectAll: selectAllFavQuotes,
  selectEntities: selectFavQuoteEntities
} = favQuoteAdapter.getSelectors(getFavQuoteState);

export const selectCurrentFavQuote = createSelector(
  getFavQuoteState,
  state => state.selectedFavQuote
);
