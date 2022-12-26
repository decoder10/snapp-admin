import React, { FC, memo } from 'react';

import { Stack, Typography } from '@mui/material';

const HeaderLanguageItem: FC<IHeaderLanguageConfig> = props => {
  const { title, languageIcon } = props;

  const styles = {
    border: '1px solid var(--mui-palette-secondary-light)',
    borderRadius: '100%',
    width: '24px',
    height: '23px',
  };

  return (
    <Stack direction="row" spacing={2} alignItems={'center'}>
      <img style={styles} src={languageIcon as string} alt={title} />

      <Typography
        fontSize="16px"
        fontWeight={400}
        lineHeight="24px"
        variant="body1"
        textTransform="uppercase"
        sx={{ opacity: 0.87 }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default memo(HeaderLanguageItem);
