import React, { useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { ModalTypesEnums } from 'enums';

import { Modal } from 'core/modal/modal';

export function Favorites() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="sidebar-panel-item">
      <button className={`panel-item-button ${modalOpen ? 'active' : ''}`} onClick={() => setModalOpen(true)}>
        <i className="icon-star"></i>
      </button>

      <Modal
        modalOptions={{
          modalOpen,
          content: <></>,
          title: tKeys('favorites'),
          type: ModalTypesEnums.INLINE,
          width: '334px',
        }}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
}
