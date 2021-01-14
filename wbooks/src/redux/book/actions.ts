import { createTypes, completeTypes } from 'redux-recompose';
import { bookService } from '@services/BooksService';

export const actions = createTypes(completeTypes(['GET_BOOKS']), '@@BOOKS');

export const targets = { books: 'books' };

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: targets.books,
    service: bookService
  })
};

export default actionCreators;
