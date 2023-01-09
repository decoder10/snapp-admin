import React from 'react';

import { tKeys } from 'translations/translation-keys';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

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
          return headCell.id === 'action' ? (
            <TableCell key={headCell.id as TKeyOf<TableHeadCell>} className="sticky-table-column position-right">
              {tKeys(headCell.id)}
            </TableCell>
          ) : (
            <TableCell
              key={headCell.id as TKeyOf<TableHeadCell>}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                IconComponent={ArrowDropDownIcon}
                active
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={event => onRequestSort(event, headCell.id as string)}
              >
                {tKeys(headCell.id)}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
