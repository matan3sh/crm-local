const gDefaultOrders = [
  {
    _id: 'afvgbaeqca',
    product: 'kitchen table',
    price: 199,
    date: new Date(2020, 0, 1),
    status: 'Pending',
  },
  {
    _id: '452shbnnki',
    product: 'futon',
    price: 149,
    date: new Date(2020, 0, 11),
    status: 'Pending',
  },
  {
    _id: 'DFbnH890Oik',
    product: 'coffe maker',
    price: 140,
    date: new Date(2020, 2, 11),
    status: 'Pending',
  },
  {
    _id: '12ERFVghjm',
    product: 'futon',
    price: 299,
    date: new Date(2020, 3, 11),
    status: 'Out for Delivery',
  },
  {
    _id: '1SDcvbMjkh',
    product: 'dish set',
    price: 99,
    date: new Date(2020, 5, 29),
    status: 'Delivered',
  },
];

function getDefaultData() {
  return gDefaultOrders;
}

export default {
  getDefaultData,
};
