import React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TableHead, TableSortLabel } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ITableData, Order } from 'ui/customer/customer-table';
interface ITableHeadData extends ITableData {
  action: string;
}

interface HeadCell {
  id: keyof ITableHeadData;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'customerId',
    label: 'Customer Id',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'middleName',
    label: 'MiddleName',
  },
  {
    id: 'lastName',
    label: 'LastName',
  },
  {
    id: 'address',
    label: 'Address',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'action',
    label: 'Action',
  },
];

interface ICustomTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ITableHeadData) => void;
  order: Order;
  orderBy: string;
}

const CustomTableHead = (props: ICustomTableProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof ITableHeadData) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              IconComponent={ArrowDropDownIcon}
              active
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? ( */}
              {/*  <Box component="span" sx={{ visibility: 'hidden' }}> */}
              {/*    {order === 'desc' ? 'sorted descending' : 'sorted ascending'} */}
              {/*  </Box> */}
              {/* ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
