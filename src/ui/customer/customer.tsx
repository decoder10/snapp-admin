import React, { FC } from 'react';

import { tKeys } from 'translations/translation-keys';

import { MenuItem } from '@mui/material';

import { CoreTable } from 'core/core';

import { headCells } from 'ui/customer/customer-head-config';
import { CustomersFakeData } from 'ui/customer/customers-fake-data';

const Customer: FC = () => {
  const handleView = (rowData: ITableData) => {
    // eslint-disable-next-line no-console
    console.log('log------rowData', rowData);
  };

  const handleEdit = (rowData: ITableData) => {
    // eslint-disable-next-line no-console
    console.log('log------rowData', rowData);
  };

  const handleTableFilterChanges = (filterData: ITableFilter<ITableData> & ITableSearch) => {
    console.log('log------filterData', filterData);

    return;
  };

  const renderTableActions = (rowData: ITableData, handleClose: () => void) => {
    return (
      <div className="table-actions-group">
        <MenuItem
          onClick={() => {
            handleView(rowData);
            handleClose();
          }}
        >
          {tKeys('view')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleEdit(rowData);
            handleClose();
          }}
        >
          {tKeys('edit')}
        </MenuItem>
      </div>
    );
  };

  return (
    <div className="customer-content">
      <CoreTable<ITableData>
        hasSearch
        tableTitle={tKeys('customers')}
        tableData={CustomersFakeData}
        headCells={headCells}
        identifierKey="customerId"
        hasPagination
        hasAction
        handleTableFilterChanges={(filterData: ITableFilter<ITableData> & ITableSearch) =>
          handleTableFilterChanges(filterData)
        }
        actions={(rowData: ITableData, handleClose: () => void) => renderTableActions(rowData, handleClose)}
      />
    </div>
  );
};

export default Customer;
