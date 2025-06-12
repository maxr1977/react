const initialState = {
  users: ['Alice', 'Charlie', 'David', 'Jon', 'Joana'],
  filter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
