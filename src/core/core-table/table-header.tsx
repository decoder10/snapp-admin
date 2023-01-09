import React, { FC } from 'react';

import { Typography } from '@mui/material';

import { CoreSearch } from 'core/core';

interface ITableHeaderProps {
  tableTitle: string;
  hasSearch: boolean;
  headCells: TableHeadCell[];
}

export const TableHeader: FC<ITableHeaderProps> = props => {
  const { tableTitle, headCells } = props;

  const handleSearch = (searchData: ITableSearch) => {
    console.log('log-------searchData', searchData);

    return;
  };

  return (
    <div className="table-header">
      <Typography fontSize="14px" fontWeight="700" lineHeight="24px">
        {tableTitle}
      </Typography>

      <div className="right-side">
        <CoreSearch headCells={headCells} handleSearch={(searchData: ITableSearch) => handleSearch(searchData)} />
      </div>
    </div>
  );
};
