import storageService from './storageService';
import db from '../data/ordersDB';

const KEY = 'orders';
var gOrders = null;
_createCustomers();

function _createCustomers() {
  gOrders = storageService.load(KEY);
  if (gOrders === null) {
    gOrders = db.getDefaultData();
    storageService.store(KEY, gOrders);
  }
}

const query = async () => {
  try {
    return Promise.resolve(gOrders);
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
