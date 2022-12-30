import React, { useEffect, useState } from 'react';

import { Chip, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import _ from 'lodash';

import { CoreTableHead } from 'core/core-table/core-table-head';
import { CoreTablePagination } from 'core/core-table/core-table-pagination';
import { useDirectionSort } from 'core/core-table/use-direction-sort';

interface ITableProps<TableData> {
  tableData: TableData[];
  headCells: TableHeadCell[];
  identifierKey: TKeyOf<TableData>;
  hasPagination: boolean;
  rowsPerPage?: number;
}

export const CoreTable = <TableData,>(props: ITableProps<TableData>) => {
  const { tableData = [], identifierKey, hasPagination, rowsPerPage = 9, headCells } = props;

  const { directionSort, sortedData } = useDirectionSort<TableData>();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(rowsPerPage);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<TKeyOf<TableData>>(identifierKey);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property as TKeyOf<TableData>);
  };

  useEffect(() => {
    directionSort({ tableData, order, orderBy, currentPage, perPage });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, order, orderBy, perPage, tableData]);

  return (
    <div className="table-container">
      {sortedData.length ? (
        <>
          <TableContainer>
            <Table aria-label="custom pagination table">
              <CoreTableHead order={order} onRequestSort={handleRequestSort} orderBy={orderBy} headCells={headCells} />

              <TableBody>
                {sortedData.map(tableRowItem => {
                  return (
                    <TableRow key={tableRowItem[identifierKey] as number}>
                      {_.keys(tableRowItem).map(tableRowItemKey => {
                        if (tableRowItemKey === 'status') {
                          const item = tableRowItem[tableRowItemKey as TKeyOf<TableData>] as string;

                          return (
                            <TableCell key={tableRowItemKey} align="left">
                              <Chip
                                size="small"
                                label={item}
                                color={item === 'Terminated' ? 'error' : item === 'pending' ? 'warning' : 'success'}
                              />
                            </TableCell>
                          );
                        }

                        return (
                          <TableCell style={{ minWidth: '12.5%' }} key={tableRowItemKey} align="left">
                            {tableRowItem[tableRowItemKey as TKeyOf<TableData>] as string}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {hasPagination ? (
            <CoreTablePagination
              rowsPerPage={rowsPerPage}
              perPage={perPage}
              page={currentPage}
              dataLength={tableData.length}
              handleSetCurrentPage={value => setCurrentPage(value)}
              handleSetPerPage={value => setPerPage(value)}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
};
