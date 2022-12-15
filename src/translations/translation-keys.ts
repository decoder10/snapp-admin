import { t } from './translator';

export const tKeys = (key: string | number, variables?: (string | number)[]) => {
  const tr: { [key: string | number]: string } = {
    signInPasswordDigitsRange: '[signInPasswordDigitsRange]',
  };

  if (!tr[key]) {
    if (process.env.NODE_ENV === 'development') {
      return `--${key} not found--`;
    }

    return `[${key}]`;
  }

  return t(tr[key] || `[${key}]`, variables);
};
