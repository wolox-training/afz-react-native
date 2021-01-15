import { applyMiddleware, compose, createStore, combineReducers as CR } from 'redux';
import Reactotron from '@config/reactotronConfig';
import book from '@redux/book/reducer';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';

const middlewares = [applyMiddleware(thunk, fetchMiddleware)];
if (__DEV__) {
  middlewares.push(Reactotron.createEnhancer());
}

const rootReducer = CR({
  book
});
configureMergeState((state: any, newContent: any) => state.merge(newContent));
export default createStore(rootReducer, compose(...middlewares));
