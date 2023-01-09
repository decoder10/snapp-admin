import React, { ReactNode, useEffect, useState } from 'react';

import { Table, TableContainer } from '@mui/material';

import CoreTableBody from 'core/core-table/core-table-body';
import { CoreTableHead } from 'core/core-table/core-table-head';
import { CoreTablePagination } from 'core/core-table/core-table-pagination';
import { TableHeader } from 'core/core-table/table-header';
import { useDirectionSort } from 'core/core-table/use-direction-sort';

interface ITableProps<TableData> {
  tableData: TableData[];
  headCells: TableHeadCell[];
  identifierKey: TKeyOf<TableData>;
  rowsPerPage?: number;
  tableTitle: string;
  hasPagination: boolean;
  hasAction: boolean;
  hasSearch: boolean;
  actions(rowData: TableData, handleClose: () => void): ReactNode;
  handleTableFilterChanges(filterData: ITableFilter<TableData>): void;
}

export const CoreTable = <TableData,>(props: ITableProps<TableData>) => {
  const {
    tableData = [],
    identifierKey,
    hasPagination,
    hasAction,
    rowsPerPage = 9,
    headCells,
    actions,
    handleTableFilterChanges,
    tableTitle,
    hasSearch,
  } = props;

  const { directionSort, sortedData } = useDirectionSort<TableData>();

  const [tableFilterData, setTableFilterData] = useState<ITableFilter<TableData>>({
    currentPage: 0,
    perPage: rowsPerPage,
    order: 'asc',
    orderBy: identifierKey,
  });

  const { orderBy, order, currentPage, perPage } = tableFilterData;

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === 'asc';

    setTableFilterData(prevState => ({
      ...prevState,
      order: isAsc ? 'desc' : 'asc',
      orderBy: property as TKeyOf<TableData>,
    }));
  };

  useEffect(() => {
    directionSort({ tableData, order, orderBy, currentPage, perPage });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, order, orderBy, perPage, tableData]);

  useEffect(() => {
    handleTableFilterChanges(tableFilterData);
  }, [handleTableFilterChanges, tableFilterData]);

  return (
    <div className="core-table-wrap">
      <TableHeader tableTitle={tableTitle} hasSearch={hasSearch} headCells={headCells} />

      <div className="table-container">
        <>
          <TableContainer>
            <Table aria-label="custom pagination table">
              <CoreTableHead order={order} onRequestSort={handleRequestSort} orderBy={orderBy} headCells={headCells} />

              <CoreTableBody<TableData>
                sortedData={sortedData}
                identifierKey={identifierKey}
                hasAction={hasAction}
                actions={actions}
                colspan={hasAction ? headCells.length : headCells.length + 1}
              />
            </Table>
          </TableContainer>

          {hasPagination ? (
            <CoreTablePagination
              rowsPerPage={rowsPerPage}
              perPage={perPage}
              page={currentPage}
              dataLength={tableData.length}
              colspan={hasAction ? headCells.length : headCells.length + 1}
              handleSetCurrentPage={value =>
                setTableFilterData(prevState => ({
                  ...prevState,
                  currentPage: value,
                }))
              }
              handleSetPerPage={value =>
                setTableFilterData(prevState => ({
                  ...prevState,
                  perPage: value,
                }))
              }
            />
          ) : null}
        </>
      </div>
    </div>
  );
};
