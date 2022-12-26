import React, { FC, useState } from 'react';

// import { tKeys } from 'translations/translation-keys';
// import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// import { headerProfileMenuConfig } from 'statics/header/header-profile/header-profile-menu-config';

const HeaderLanguageSelect: FC = () => {
  const [language, setLanguage] = useState<string>('EN');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    // <Box sx={{ minWidth: 120 }}>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={language}
      onChange={handleChange}
      size="small"
    >
      <MenuItem value={'EN'}>EN</MenuItem>
      <MenuItem value={20}>Arm</MenuItem>
      <MenuItem value={30}>Ru</MenuItem>
    </Select>
    // </Box>
  );
};

export default HeaderLanguageSelect;
