import React, { FC } from 'react';

import { tKeys } from 'translations/translation-keys';

import { MenuItem } from '@mui/material';

import { CoreTable } from 'core/core';

import { headCells } from 'ui/customer/customer-head-config';

const Customer: FC = () => {
  const handleView = (rowData: ITableData) => {
    // eslint-disable-next-line no-console
    console.log('log------rowData', rowData);
  };

  const handleEdit = (rowData: ITableData) => {
    // eslint-disable-next-line no-console
    console.log('log------rowData', rowData);
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
        url="/customer"
        method="get"
        hasSearch
        tableTitle={tKeys('customers')}
        headCells={headCells}
        identifierKey="customerId"
        hasPagination
        hasAction
        actions={(rowData: ITableData, handleClose: () => void) => renderTableActions(rowData, handleClose)}
      />
    </div>
  );
};

export default Customer;
