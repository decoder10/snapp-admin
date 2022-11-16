import React, { useCallback, useState } from 'react';

import { FullScreen, Sound } from 'core/core';

import { About } from 'ui/about/about';
import { Limits } from 'ui/limits/limits';

export function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handelModalOpened = useCallback(
    opened => {
      setModalOpen(opened);
    },
    [setModalOpen],
  );

  return (
    <header className={`header ${modalOpen ? 'opened' : ''}`}>
      <Limits modalOpened={(opened: boolean) => handelModalOpened(opened)} />

      <Sound />

      <About modalOpened={(opened: boolean) => handelModalOpened(opened)} />

      <FullScreen />
    </header>
  );
}
