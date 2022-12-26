import React, { FC } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useAppDispatch, useAppSelector } from 'hooks/hooks';

import { getLanguageId, languageIdAction } from 'reducers/language';

import { headerLanguageConfig } from 'statics/header/header-language-select/header-language-config';
import HeaderLanguageItem from 'statics/header/header-language-select/header-language-item';

const HeaderLanguageSelect: FC = () => {
  const dispatch = useAppDispatch();
  const languageIdState = useAppSelector(getLanguageId);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(languageIdAction(event.target.value));
  };

  return (
    <Select id="header-language-select" value={languageIdState} onChange={handleChange} size="small">
      {headerLanguageConfig.map(item => {
        return (
          <MenuItem key={item.value} value={item.value}>
            <HeaderLanguageItem {...item} />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default HeaderLanguageSelect;
