import {ActionReducerMap} from '@ngrx/store';

import {FavQuoteState} from './store/quotes.interface';
import {favQuoteReducer} from './store/quotes.reducers';

export interface AppState {
  quote: FavQuoteState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  quote: favQuoteReducer
};
