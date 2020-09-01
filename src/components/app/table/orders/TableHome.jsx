import React from 'react';
import Moment from 'react-moment';

const TableHome = ({ lastFiveOrders }) => {
  const theads = Object.keys(lastFiveOrders[0]).filter(
    (thead) => thead !== '_id'
  );
  return (
    <table className='content-table'>
      <thead>
        <tr>
          {theads.map((thead, index) => (
            <th key={index}>{thead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lastFiveOrders?.map((order) => (
          <tr key={order._id}>
            <td>{order.product}</td>
            <td>{order.price}$</td>
            <td>
              <Moment format='LL'>
                <span>{order.date}</span>
              </Moment>
            </td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableHome;
