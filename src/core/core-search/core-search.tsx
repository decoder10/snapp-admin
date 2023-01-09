import React, { FC, useEffect, useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import SearchIcon from '@mui/icons-material/Search';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface ISearch {
  headCells: TableHeadCell[];
  handleSearch(searchData: ITableSearch): void;
}

export const CoreSearch: FC<ISearch> = props => {
  const { headCells, handleSearch } = props;

  const [column, setColumn] = useState<string>('');

  const [searchData, setSearchData] = useState<ITableSearch>({
    searchColumn: '',
    searchValue: '',
  });

  const handleSearchChange = (event: { target: { value: string } }) => {
    setSearchData(prevState => ({ ...prevState, searchValue: event.target.value }));
  };

  const handleColumnChange = (event: SelectChangeEvent) => {
    setColumn(event.target.value as string);
    setSearchData(prevState => ({
      ...prevState,
      searchColumn: headCells[event.target.value as unknown as number]?.id as string,
    }));
  };

  useEffect(() => {
    handleSearch(searchData);
  }, [handleSearch, searchData]);

  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <FormControl sx={{ m: 1, minWidth: 184 }} size="small">
        <InputLabel id="search-column-select">{tKeys('column')}</InputLabel>
        <Select
          labelId="search-column-select"
          id="search-column-select"
          value={column}
          label={tKeys('column')}
          onChange={handleColumnChange}
        >
          <MenuItem value="">
            <em>{tKeys('none')}</em>
          </MenuItem>

          {headCells.map((item, index) => {
            const { id, label } = item;

            return id !== 'action' ? (
              <MenuItem key={id as TKeyOf<TableHeadCell>} value={index}>
                {label}
              </MenuItem>
            ) : null;
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, width: 184 }} variant="outlined">
        <InputLabel htmlFor="search-field">{tKeys('search')}</InputLabel>
        <OutlinedInput
          size="small"
          id="search-field"
          value={searchData.searchValue}
          onChange={handleSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          label={tKeys('search')}
        />
      </FormControl>

      <Button variant="contained" size="medium">
        {tKeys('search')}
      </Button>
    </Stack>
  );
};
