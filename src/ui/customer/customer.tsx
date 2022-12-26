import React, { FC } from 'react';

import CustomerTable from 'ui/customer/customer-table';

const Customer: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '100%',
          height: '65px',
          backgroundColor: 'lightgrey',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '22px',
          marginBottom: '20px',
        }}
      >
        Customer Header
      </div>
      <CustomerTable />
    </div>
  );
};

export default Customer;
