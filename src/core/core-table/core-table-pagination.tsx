import React, { FC } from 'react';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { TableFooter, TablePagination, TableRow } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

interface IPaginationProps {
  perPage: number;
  rowsPerPage: number;
  page: number;
  dataLength: number;
  handleSetCurrentPage(value: number): void;
  handleSetPerPage(value: number): void;
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}

export const CoreTablePagination: FC<IPaginationProps> = props => {
  const { perPage, dataLength, rowsPerPage, page, handleSetCurrentPage, handleSetPerPage } = props;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleSetCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleSetPerPage(parseInt(event.target.value, 10));
    handleSetCurrentPage(0);
  };

  return (
    <table className="table-footer">
      <TableFooter>
        <TableRow>
          {dataLength ? (
            <TablePagination
              rowsPerPageOptions={[rowsPerPage, 20, 40, 60, 80, 100]}
              colSpan={8}
              count={dataLength}
              rowsPerPage={perPage}
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
    </table>
  );
};
