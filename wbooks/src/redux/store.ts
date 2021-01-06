import { createStore } from 'redux';
import Reactotron from '@config/reactotronConfig';
import reducer from '@redux/book/reducer';

export default createStore(reducer, Reactotron.createEnhancer());
