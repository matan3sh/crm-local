import storageService from './storageService';
import db from '../data/productsDB';

const KEY = 'products';
var gProducts = null;
_createCustomers();

function _createCustomers() {
  gProducts = storageService.load(KEY);
  if (gProducts === null) {
    gProducts = db.getDefaultData();
    storageService.store(KEY, gProducts);
  }
}

const query = async () => {
  try {
    return Promise.resolve(gProducts);
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
