import React, { FC, ReactElement } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Modal, Box, Button } from '@mui/material';

interface IProps {
  open: boolean; // open/close
  content: string | ReactElement; // modal body
  onClose(): void; // close action

  title?: string; // header title
  hideIcon?: boolean; // for hide header icon
  leftBtnText?: string; // left button text
  rightBtnText?: string; // right button text
  iconComponent?: ReactElement; // to overwrite header icon - default Close
  wrapClassName?: string; // wrapper class for SCSS overwritten

  leftBtnAction?(): void; // left button click handler
  rightBtnAction?(): void; // right button click handler
}

export const CoreModal: FC<IProps> = (props: IProps) => {
  const {
    open,
    title,
    content,
    hideIcon,
    leftBtnText,
    rightBtnText,
    iconComponent,
    wrapClassName,

    onClose,
    leftBtnAction,
    rightBtnAction,
  } = props;

  return (
    <Modal className={`core-modal-wrap ${wrapClassName}`} open={open} onClose={onClose}>
      <Box className={'core-modal'}>
        <Box className={'core-modal-header'}>
          {title ? <h3>{title}</h3> : null}
          <Box className={'core-modal-header-icon'}>
            {!hideIcon ? iconComponent ? iconComponent : <CloseIcon onClick={onClose} /> : null}
          </Box>
        </Box>
        <Box className={'core-modal-body'}>{content}</Box>
        {leftBtnText || rightBtnText ? (
          <Box className={'core-modal-footer'}>
            {leftBtnText ? (
              <Button variant="outlined" className={'core-modal-footer-left-btn'} onClick={leftBtnAction}>
                {leftBtnText}
              </Button>
            ) : null}
            {rightBtnText ? (
              <Button variant="outlined" className={'core-modal-footer-right-btn'} onClick={rightBtnAction}>
                {rightBtnText}
              </Button>
            ) : null}
          </Box>
        ) : null}
      </Box>
    </Modal>
  );
};
