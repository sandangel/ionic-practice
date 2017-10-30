import {ActionReducerMap} from '@ngrx/store';

import {FavQuoteState} from './quote/quotes.interface';
import {favQuoteReducer} from './quote/quotes.reducers';

export interface AppState {
  quote: FavQuoteState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  quote: favQuoteReducer
};
