import React, { FC, memo } from 'react';

import { Stack, Typography } from '@mui/material';

const HeaderLanguageItem: FC<IHeaderLanguageConfig> = props => {
  const { title, languageIcon } = props;

  return (
    <Stack direction="row" spacing={2} alignItems={'center'}>
      <img src={languageIcon as string} alt={title} />

      <Typography fontSize="16px" fontWeight={400} lineHeight="24px" variant="subtitle1" textTransform="uppercase">
        {title}
      </Typography>
    </Stack>
  );
};

export default memo(HeaderLanguageItem);
