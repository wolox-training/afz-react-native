import { applyMiddleware, compose, createStore, combineReducers as CR } from 'redux';
import Reactotron from '@config/reactotronConfig';
import book from '@redux/book/reducer';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';

const middlewares = [thunk, fetchMiddleware];
const enhancers = [applyMiddleware(...middlewares), Reactotron.createEnhancer()];

const rootReducer = CR({
  book
});
configureMergeState((state: any, newContent: any) => state.merge(newContent));
export default createStore(rootReducer, compose(...enhancers));
