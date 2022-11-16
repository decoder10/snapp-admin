import React, { useState } from 'react';

import { tKeys } from 'translations/translation-keys';

import { Modal } from 'core/modal/modal';

import trustIcon from 'assets/images/trust-icon.svg';

export function ProvablyFairness() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="provably-fairness">
      <button className="provably-fairness-button" onClick={() => setModalOpen(true)}>
        <img src={trustIcon} alt="trustIcon" />
        <span>{tKeys('provablyFairness')}</span>
      </button>

      <Modal
        modalOptions={{ modalOpen, content: <></>, title: tKeys('provablyFairness') }}
        closeModal={() => setModalOpen(false)}
      />
    </div>
  );
}
