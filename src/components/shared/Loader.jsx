import React from 'react';
import loading from '../../assets/img/loading.gif';

const Loader = () => <img src={loading} alt='Loading...' style={loaderStyle} />;
const loaderStyle = {
  width: '80px',
  display: 'flex',
  margin: '25rem 50rem',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Loader;
