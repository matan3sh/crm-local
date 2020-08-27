import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCustomers } from '../../store/customers/actions';
import { loadOrders } from '../../store/orders/actions';
import { loadProducts } from '../../store/products/actions';

import { Table, Cards } from '../app';

const Home = ({
  loadCustomers,
  loadOrders,
  loadProducts,
  orders,
  customers,
  products,
}) => {
  useEffect(() => {
    loadOrders();
    loadCustomers();
    loadProducts();
    // eslint-disable-next-line
  }, []);

  const pendings = orders?.filter((order) => order.status === 'Pending');
  return (
    <div className='home'>
      <h1>Welcome Dashboard</h1>
      <Cards
        totalOrders={orders?.length}
        totalCustomers={customers?.length}
        totalPendings={pendings?.length}
        totalProducts={products?.length}
      />
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.ordersApp.orders,
  customers: state.customersApp.customers,
  products: state.productsApp.products,
});
const mapDispatchToProps = {
  loadCustomers,
  loadOrders,
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
