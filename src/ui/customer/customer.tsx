import React, { FC } from 'react';

import CustomerHeader from 'ui/customer/customer-header';
import CustomerTable from 'ui/customer/customer-table';

const Customer: FC = () => {
  return (
    <div className="customer-content">
      <CustomerHeader />
      <CustomerTable />
    </div>
  );
};

export default Customer;
