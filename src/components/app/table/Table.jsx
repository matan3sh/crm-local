import React from 'react';

const Table = () => {
  return (
    <table className='content-table'>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Points</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Domenic</td>
          <td>88,110</td>
          <td>dcode</td>
        </tr>
        <tr className='active-row'>
          <td>2</td>
          <td>Sally</td>
          <td>72,400</td>
          <td>Students</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Nick</td>
          <td>52,300</td>
          <td>dcode</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
