interface Action {
  type: string;
  books: any;
  loading: boolean;
  error: string;
}
interface State {
  books: any;
  loading: boolean;
  error: string;
}
const initialState: State = {
  books: [],
  loading: false,
  error: ''
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        loading: action.loading
      };
    case 'GET_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.books,
        loading: action.loading
      };
    case 'GET_BOOKS_FAILURE':
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
