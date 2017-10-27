import {favQuoteAdapter, favQuoteInitialState} from './quotes.entity';
import {FavQuoteState} from './quotes.interface';
import {QuoteActions} from './quotes.actions';

export function favQuoteReducer(state = favQuoteInitialState, action: QuoteActions): FavQuoteState {
  switch (action.type) {
    case '[Quote] Add Fav Quote':
      return {
        ...favQuoteAdapter.addOne(action.payload, state),
        selectedFavQuote: null
      };
    case '[Quote] Remove Fav Quote':
      return {
        ...favQuoteAdapter.removeOne(action.payload.id, state),
        selectedFavQuote: null
      };
    case '[Quote] Select Quote':
      return {
        ...state,
        selectedFavQuote: action.payload
      };
    default: {
      return state;
    }
  }
}
