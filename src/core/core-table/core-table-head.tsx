import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import { Order } from 'ui/customer/customer-table';

interface ICustomTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string | number | symbol;
  headCells: TableHeadCell[];
}

export const CoreTableHead = (props: ICustomTableProps) => {
  const { headCells, order, orderBy, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => {
          return (
            <TableCell
              key={headCell.id as TKeyOf<TableHeadCell>}
              sortDirection={orderBy === headCell.id ? order : false}
              className={headCell.id === 'action' ? 'sticky-table-column position-right' : ''}
            >
              <TableSortLabel
                IconComponent={ArrowDropDownIcon}
                active
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={event => onRequestSort(event, headCell.id as string)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
