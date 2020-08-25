import productService from '../../services/productService';

export const loadProducts = () => async (dispatch) => {
  try {
    let res = await productService.query();
    dispatch({ type: 'SET_PRODUCTS', payload: res });
  } catch (err) {
    console.log(err);
  }
};
