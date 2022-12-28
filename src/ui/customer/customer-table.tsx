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

interface ITableData {
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
    customerId: 1,
    name: 'Cupcake',
    middleName: 'Khachatryan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 2,
    name: 'Donut',
    middleName: 'Harutyunyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 3,
    name: 'Eclair',
    middleName: 'Vardanyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
  {
    customerId: 4,
    name: 'Frozen',
    middleName: 'Gevorgyan',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 5,
    name: 'Gingerbread',
    middleName: 'jeremih',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 6,
    name: 'Honeycomb',
    middleName: 'Smit',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 7,
    name: 'Ice cream sandwich',
    middleName: 'Omar',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 8,
    name: 'Jelly Bean',
    middleName: 'Carter',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 9,
    name: 'KitKat',
    middleName: 'Willson',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
  {
    customerId: 10,
    name: 'Lollipop',
    middleName: 'Brook',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Verifiyed',
  },
  {
    customerId: 11,
    name: 'Marshmallow',
    middleName: 'Lizz',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 12,
    name: 'Nougat',
    middleName: 'Morris',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'Terminated',
  },
  {
    customerId: 13,
    name: 'Oreo',
    middleName: 'Johnson',
    lastName: 'Harrison',
    address: 'Yerevan Armenia',
    email: 'gorkhach@gmail.com',
    status: 'pending',
  },
];

const CustomPaginationActionsTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
        <TableBody>
          {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(row => (
            <TableRow key={row.customerId}>
              <>
                {_.keys(row).map(key => {
                  if (key === 'status') {
                    return (
                      <TableCell key={key}>
                        <Chip
                          size="small"
                          label={row[key]}
                          color={row[key] === 'Terminated' ? 'error' : row[key] === 'pending' ? 'warning' : 'success'}
                        />
                      </TableCell>
                    );
                  }
                  return <TableCell key={key}>{row[key as keyof ITableData]}</TableCell>;
                })}
                <TableCell key={`${row.customerId}action`}>
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
