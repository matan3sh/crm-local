const initialState = {
  orders: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
}
