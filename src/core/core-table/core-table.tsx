import React, { ReactNode, useEffect, useState } from 'react';

import { Table, TableContainer, Typography } from '@mui/material';

import { useFetch } from 'hooks/use-fetch';

import CoreTableBody from 'core/core-table/core-table-body';
import { CoreTableHead } from 'core/core-table/core-table-head';
import { CoreTablePagination } from 'core/core-table/core-table-pagination';
import { CoreTableSearch } from 'core/core-table/core-table-search';

interface ITableProps<TableData> {
  headCells: TableHeadCell[];
  identifierKey: TKeyOf<TableData>;
  rowsPerPage?: number;
  tableTitle: string;
  url: string;
  hasPagination: boolean;
  hasAction: boolean;
  hasSearch: boolean;
  method: TFetchTypes;
  actions(rowData: TableData, handleClose: () => void): ReactNode;
}

export const CoreTable = <TableData,>(props: ITableProps<TableData>) => {
  const { fetchData, resultData } = useFetch<TableData[]>();

  const {
    identifierKey,
    hasPagination,
    hasAction,
    rowsPerPage = 9,
    headCells,
    tableTitle,
    hasSearch,
    url,
    method,
    actions,
  } = props;

  const [searchData, setSearchData] = useState<ITableSearch>({
    searchColumn: '',
    searchValue: '',
  });

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
    fetchData({ method, url }).then(() => undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);

  return (
    <div className="core-table-wrap">
      <div className="table-header">
        <Typography fontSize="14px" fontWeight="700" lineHeight="24px">
          {tableTitle}
        </Typography>

        <div className="right-side">
          {hasSearch ? (
            <CoreTableSearch
              headCells={headCells}
              searchData={searchData}
              handleSearch={(searchData: ITableSearch) => setSearchData(searchData)}
            />
          ) : null}
        </div>
      </div>

      <div className="table-container">
        <>
          <TableContainer>
            <Table aria-label="custom pagination table">
              <CoreTableHead order={order} onRequestSort={handleRequestSort} orderBy={orderBy} headCells={headCells} />

              <CoreTableBody<TableData>
                sortedData={resultData}
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
              dataLength={resultData?.length || 0}
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
