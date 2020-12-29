import { Book } from '@interfaces/Book';

export interface RouteBook {
  key: string;
  name: string;
  params: {
    item: Book;
  };
}
