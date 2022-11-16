import React, { useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { ModalTypesEnums } from 'enums';

import { Modal } from 'core/modal/modal';

interface IProps {
  modalOpened: (opened: boolean) => void;
}

export function Limits({ modalOpened }: IProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="sidebar-panel-item">
      <button
        className={`panel-item-button arrow-bottom ${modalOpen ? 'active' : ''}`}
        onClick={() => {
          setModalOpen(!modalOpen);
          modalOpened(!modalOpen);
        }}
      >
        <i className="icon-limits"></i>
      </button>

      <Modal
        modalOptions={{
          modalOpen,
          content: <></>,
          title: tKeys('limitsAndPayouts'),
          type: ModalTypesEnums.POSITIONED,
          outsideClick: false,
        }}
        closeModal={() => {
          setModalOpen(false);
          modalOpened(false);
        }}
      />
    </div>
  );
}
