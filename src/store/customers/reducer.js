const initialState = {
  customers: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
}
