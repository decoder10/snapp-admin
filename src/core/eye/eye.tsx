import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const Eye = ({ makeVisible, id = 'eye' }: { makeVisible: (value: boolean) => void; id: string }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleMouseEvent = () => {
    setVisible(!visible);
    makeVisible(!visible);
  };

  return (
    <IconButton
      id={id}
      style={{ backgroundColor: 'transparent' }}
      color="default"
      onMouseDown={handleMouseEvent}
      onMouseUp={handleMouseEvent}
    >
      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
    </IconButton>
  );
};

export default Eye;
