import { FC } from 'react';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  id: number,
  name: string,
  middleName: string,
  lastName: string,
  address: string,
  email: string,
  status: string,
  action: string,
) {
  return { id, name, middleName, lastName, address, email, status, action };
}

const rows = [
  createData(123, 'Bennett', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'Maria', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'John', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'Gor ', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'Tigran', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'Aram', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
  createData(123, 'Spo', 'Jeremiah', 'Harrison', '950 Ridge RD C25', 'bjharrison@gmail.com', 'Terminated', 'VIEW'),
];

const CustomerTable: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Middle Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: '2px' } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.middleName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">
                <Chip size="small" label={row.status} color="error" />
              </TableCell>
              <TableCell align="left">
                <Button variant="outlined" size="small">
                  {row.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
