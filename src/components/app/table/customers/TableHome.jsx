import React from 'react';

const TableHome = ({ lastFiveCustomers }) => {
  const theads = Object.keys(lastFiveCustomers[0]).filter(
    (thead) => thead !== '_id' && thead !== 'age' && thead !== 'orders'
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
        {lastFiveCustomers?.map((customer) => (
          <tr key={customer._id}>
            <td>{customer.name}</td>
            <td>{customer.gender}</td>
            <td className='no-cap'>{customer.email}</td>
            <td>{customer.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableHome;
