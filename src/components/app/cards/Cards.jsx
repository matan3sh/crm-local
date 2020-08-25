import React from 'react';

const Cards = ({
  totalOrders,
  totalCustomers,
  totalPendings,
  totalProducts,
}) => {
  return (
    <div className='cards'>
      <div className='cards__card'>
        <div className='cards__card-left'>
          <i className='fas fa-users'></i>
        </div>
        <div className='cards__card-right'>
          <p>{totalCustomers}</p>
          <small>Customers</small>
        </div>
      </div>
      <div className='cards__card'>
        <div className='cards__card-left'>
          <i className='fas fa-tags'></i>
        </div>
        <div className='cards__card-right'>
          <p>{totalProducts}</p>
          <small>Products</small>
        </div>
      </div>
      <div className='cards__card'>
        <div className='cards__card-left'>
          <i className='fas fa-pause'></i>
        </div>
        <div className='cards__card-right'>
          <p>{totalPendings}</p>
          <small>Pending</small>
        </div>
      </div>
      <div className='cards__card'>
        <div className='cards__card-left'>
          <i className='fas fa-gem'></i>
        </div>
        <div className='cards__card-right'>
          <p>{totalOrders}</p>
          <small>Orders</small>
        </div>
      </div>
    </div>
  );
};

export default Cards;
