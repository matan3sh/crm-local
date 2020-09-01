import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCustomers } from '../../store/customers/actions';
import { loadOrders } from '../../store/orders/actions';
import { loadProducts } from '../../store/products/actions';

import {
  CustomersTableHome,
  OrdersTableHome,
  OrdersLineChart,
  CustomersPieChart,
  Cards,
} from '../app';

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
  const lastFiveCustomers = customers?.filter((order, index) => index < 5);
  const lastFiveOrders = orders?.filter((order, index) => index < 5);

  return (
    <div className='home'>
      <h2>Welcome Dashboard</h2>
      <Cards
        totalOrders={orders?.length}
        totalCustomers={customers?.length}
        totalPendings={pendings?.length}
        totalProducts={products?.length}
      />
      <div className='home__chart'>
        {customers && <CustomersPieChart customers={customers} />}
        {orders && <OrdersLineChart orders={orders} />}
      </div>
      <div className='home__table'>
        {customers && (
          <div>
            <h3>Last Five Customers</h3>
            <CustomersTableHome lastFiveCustomers={lastFiveCustomers} />
          </div>
        )}
        {orders && (
          <div>
            <h3>Last Five Orders</h3>
            <OrdersTableHome lastFiveOrders={lastFiveOrders} />
          </div>
        )}
      </div>
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
