import { createTypes, completeTypes } from 'redux-recompose';
import { bookService } from '@services/BooksService';

export const actions = createTypes(completeTypes(['GET_BOOKS'], ['SET_SEARCH']), '@@BOOKS');

export const targets = { books: 'books', search: 'search' };

const actionCreators = {
  getBooks: (headers: any) => ({
    type: actions.GET_BOOKS,
    target: targets.books,
    service: bookService,
    payload: headers
  }),
  setSearch: (search: string) => ({
    type: actions.SET_SEARCH,
    payload: search,
    target: targets.search
  })
};

export default actionCreators;
