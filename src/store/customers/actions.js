import customerService from '../../services/customerService';

export const loadCustomers = (filter = '') => async (dispatch) => {
  try {
    let res = await customerService.query(filter);
    dispatch({ type: 'SET_CUSTOMERS', payload: res });
  } catch (err) {
    console.log(err);
  }
};
