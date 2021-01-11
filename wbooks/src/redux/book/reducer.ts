import { Book } from '@interfaces/Book';

interface Action {
  payload: {
    books: Book[];
    error: string;
  };
  type: string;
}
interface State {
  books: Book[] | string;
  loading: boolean;
  error: string | Book[];
}
const initialState: State = {
  books: [],
  loading: false,
  error: ''
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        loading: true,
        error: ''
      };
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload.books,
        loading: false,
        error: ''
      };
    case 'GET_BOOKS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
