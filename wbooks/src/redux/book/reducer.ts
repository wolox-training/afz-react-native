import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialStateDescription = {
  books: null,
  search: ''
};

export const initialState = completeState(initialStateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.GET_BOOKS],
  override: {
    [actions.SET_SEARCH]: (state: any, action: { payload: any }) => ({ ...state, search: action.payload })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
