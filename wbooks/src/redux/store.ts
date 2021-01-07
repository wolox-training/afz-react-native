import { applyMiddleware, compose, createStore } from 'redux';
import Reactotron from '@config/reactotronConfig';
import reducer from '@redux/book/reducer';
import thunk from 'redux-thunk';

export default createStore(reducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
