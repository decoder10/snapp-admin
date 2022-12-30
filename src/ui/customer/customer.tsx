import React, { FC } from 'react';

import { CoreTable } from 'core/core';

import { headCells } from 'ui/customer/customer-head-config';
import CustomerHeader from 'ui/customer/customer-header';
import { CustomersFakeData } from 'ui/customer/customers-fake-data';

const Customer: FC = () => {
  return (
    <div className="customer-content">
      <CustomerHeader />

      <CoreTable<ITableData>
        tableData={CustomersFakeData}
        headCells={headCells}
        identifierKey="customerId"
        hasPagination
      />
    </div>
  );
};

export default Customer;
