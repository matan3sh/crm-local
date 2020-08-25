import orderService from '../../services/orderService';

export const loadOrders = () => async (dispatch) => {
  try {
    let res = await orderService.query();
    dispatch({ type: 'SET_ORDERS', payload: res });
  } catch (err) {
    console.log(err);
  }
};
