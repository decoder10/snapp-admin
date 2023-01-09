import React, { ReactNode } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Chip, IconButton, Menu, TableBody, TableCell, TableRow } from '@mui/material';
import _ from 'lodash';

interface IBodyProps<TableData> {
  sortedData: TableData[];
  identifierKey: TKeyOf<TableData>;
  hasAction: boolean;
  actions(rowData: TableData, handleClose: () => void): ReactNode;
}

const CoreTableBody = <TableData,>(props: IBodyProps<TableData>) => {
  const { sortedData, identifierKey, hasAction, actions } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseActionMenu = () => {
    setAnchorEl(null);
  };

  return (
    <TableBody>
      {sortedData.map(tableRowItem => {
        const open = anchorEl?.id === `${tableRowItem[identifierKey]}long-button`;

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

            {hasAction ? (
              <TableCell
                key={`${tableRowItem[identifierKey]}action`}
                align="right"
                className="sticky-table-column position-right"
              >
                <IconButton
                  id={`${tableRowItem[identifierKey]}long-button`}
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleOpenActionMenu}
                >
                  <MoreVertIcon />
                </IconButton>

                <Menu
                  id={`${tableRowItem[identifierKey]}long-button`}
                  MenuListProps={{ 'aria-labelledby': 'long-button' }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleCloseActionMenu}
                  PaperProps={{ style: { width: '192px' } }}
                >
                  {actions(tableRowItem, handleCloseActionMenu)}
                </Menu>
              </TableCell>
            ) : null}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default CoreTableBody;
