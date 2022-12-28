import * as React from 'react';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import _ from 'lodash';

import CustomTableHead from 'ui/customer/customer-table-head';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export interface ITableData {
  customerId: number | string;
  name: string;
  middleName: string;
  lastName: string;
  address: string;
  email: string;
  status: string;
}

const rows: ITableData[] = [
  {
    customerId: 1455558999,
    name: 'Cupcake',
    middleName: 'Khachatryan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 7854449554,
    name: 'Donut',
    middleName: 'Harutyunyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 1258964789,
    name: 'Eclair',
    middleName: 'Vardanyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
  {
    customerId: 4589652368,
    name: 'Frozen',
    middleName: 'Gevorgyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 4587965287,
    name: 'Gingerbread',
    middleName: 'jeremih',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 2365897415,
    name: 'Honeycomb',
    middleName: 'Smit',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 3215897458,
    name: 'Ice cream sandwich',
    middleName: 'Omar',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 5698547821,
    name: 'Jelly Bean',
    middleName: 'Carter',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 6548791236,
    name: 'KitKat',
    middleName: 'Willson',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
  {
    customerId: 5487963214,
    name: 'Lollipop',
    middleName: 'Brook',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 5897410236,
    name: 'Marshmallow',
    middleName: 'Lizz',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 9658741256,
    name: 'Nougat',
    middleName: 'Morris',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 9875412589,
    name: 'Oreo',
    middleName: 'Johnson',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const CustomPaginationActionsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ITableData>('name');

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof ITableData) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <CustomTableHead onRequestSort={handleRequestSort} order={order} orderBy={orderBy} />
        <TableBody>
          {(rowsPerPage > 0
            ? stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
              )
            : rows
          ).map(row => (
            <TableRow key={row.customerId}>
              <>
                {_.keys(row).map(key => {
                  if (key === 'status') {
                    return (
                      <TableCell key={key} align="left">
                        <Chip
                          size="small"
                          label={row[key]}
                          color={row[key] === 'Terminated' ? 'error' : row[key] === 'pending' ? 'warning' : 'success'}
                        />
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell style={{ minWidth: '12.5%' }} key={key} align="left">
                      {row[key as keyof ITableData]}
                    </TableCell>
                  );
                })}
                <TableCell key={`${row.customerId}action`} align="left">
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      console.log(88, row);
                    }}
                  >
                    {'View'}
                  </Button>
                </TableCell>
              </>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            {rows.length > rowsPerPage ? (
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={8}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            ) : null}
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CustomPaginationActionsTable;
