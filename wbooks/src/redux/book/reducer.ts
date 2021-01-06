const initialState: never[] = [];

const reducer = (state = initialState, action: { type: string; books: any }) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        books: action.books
      };
    default:
      return state;
  }
};

export default reducer;
