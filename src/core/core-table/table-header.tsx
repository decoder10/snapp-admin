import React, { FC } from 'react';

import { Typography } from '@mui/material';

interface ITableHeaderProps {
  tableTitle: string;
}

export const TableHeader: FC<ITableHeaderProps> = ({ tableTitle }) => {
  return (
    <div className="table-header">
      <Typography fontSize="14px" fontWeight="700" lineHeight="24px">
        {tableTitle}
      </Typography>

      <div className="right-side"></div>
    </div>
  );
};
