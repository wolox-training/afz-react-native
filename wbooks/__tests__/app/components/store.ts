import { createStore } from 'redux';

import { Book } from '../../../src/interfaces/Book';

function store(initialState: Book) {
  return createStore(() => initialState);
}

export default store;
