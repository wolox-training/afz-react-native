import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';

import ItemBook from '../../../src/app/components/ItemBook';
import { Book } from '../../../src/interfaces/Book';

import storeFunction from './store';

const book: Book = {
  id: 1,
  author: 'Author of book',
  title: 'Title of book',
  genre: '',
  publisher: '',
  year: '',
  image: {
    url: 'http://lorempixel.com/800/600/'
  }
};
const store = storeFunction(book);
const component = (
  <Provider store={store}>
    <ItemBook {...book} />
  </Provider>
);

describe('ItemBook test', () => {
  it('it should show title and author of book', () => {
    const { getByText } = render(component);
    const title = getByText(book.title);
    const author = getByText(book.author);
    expect([title, author]).toBeDefined();
  });

  it("shouldn't display the book id", () => {
    const { queryByText } = render(component);
    expect(queryByText(`${book.id}`)).toBeNull();
  });
});
