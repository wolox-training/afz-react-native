import { Book } from '@interfaces/Book';

export interface BookState {
  books: Book[] | null | undefined;
  loading: boolean;
}
