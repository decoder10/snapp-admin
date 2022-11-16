import { memo, useCallback, useRef } from 'react';

import { ModalTypesEnums } from 'enums';

import { useMountTransition } from 'hooks/use-mount-transition';
import { useOutsideClick } from 'hooks/use-outside-click';

const initialModalOptions: IModalProps = {
  title: '',
  type: ModalTypesEnums.FULL,
  modalOpen: false,
  content: null,
  enableHorizontalScroll: false,
  enableVerticalScroll: false,
  width: '68%',
  className: '',
  outsideClick: true,
};

interface IProps {
  modalOptions: IModalProps;
  closeModal: () => void;
}

export const Modal = memo(function Modal({ modalOptions, closeModal = () => undefined }: IProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { title, type, modalOpen, content, width, className, outsideClick } = {
    ...initialModalOptions,
    ...modalOptions,
  };

  const hasTransitionedIn = useMountTransition(modalOpen, 300);

  const handleCloseModal = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useOutsideClick(outsideClick, wrapperRef, handleCloseModal);

  return hasTransitionedIn || modalOpen ? (
    <div
      className={`modal-wrapper ${className} ${hasTransitionedIn ? 'animate' : ''} ${
        modalOpen ? 'visible' : ''
      } ${type}`}
    >
      <div className="modal-body" style={{ maxWidth: width }} ref={wrapperRef}>
        <div className={`modal-header ${type}`}>
          <h2>{title}</h2>
          <button className="modal-close reset-button" onClick={handleCloseModal} type="button">
            <i className="icon-close" />
          </button>
        </div>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  ) : null;
});
