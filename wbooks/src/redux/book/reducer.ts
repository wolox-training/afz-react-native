import { Book } from '@interfaces/Book';

interface Action {
  payload: Book[] | string;
  type: string;
}
interface State {
  books: Book[] | string;
  loading: boolean;
  error: string | Book[];
}
const initialState: State = {
  books: [],
  loading: true,
  error: ''
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state
      };
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case 'GET_BOOKS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
