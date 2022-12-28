import React, { FC } from 'react';

import CustomerHeader from 'ui/customer/customer-header';
import CustomPaginationActionsTable from 'ui/customer/customer-table';

const Customer: FC = () => {
  return (
    <div className="customer-content">
      <CustomerHeader />
      {/* <CustomerTable /> */}
      <CustomPaginationActionsTable />
    </div>
  );
};

export default Customer;
