import { t } from './translator';

export const tKeys = (key: string | number, variables?: (string | number)[]) => {
  const tr: { [key: string | number]: string } = {
    // ====================== errors =======================================

    signInPasswordMinimum: '[signInPasswordMinimum]',
    signInPasswordMaximum: '[signInPasswordMaximum]',

    // aside
    dashboard: '[dashboard]',
    adminUsers: '[adminUsers]',
    rolePermission: '[rolePermission]',
    customers: '[customers]',
    merchants: '[merchants]',
    translationsCategory: '[translationsCategory]',
    service: '[service]',
    categories: '[categories]',
    transactions: '[transactions]',
    payments: '[payments]',
    billing: '[billing]',
    reports: '[reports]',
    documents: '[documents]',
    communications: '[communications]',
    translations: '[translations]',
    help: '[help]',
    settings: '[settings]',
    notFound: '[notFound]',

    // header-profile-manu
    logOut: '[logOut]',

    // sign-in
    login: '[login]',
    forgotPassword: '[forgotPassword]',
    rememberMe: '[rememberMe]',
    password: '[password]',
    email: '[email]',

    // forgot-password-email
    getCode: '[getCode]',

    // forgot-password
    confirm: '[confirm]',

    // validations
    noEmpty: '[noEmpty]',
    mustBeSame: '[mustBeSame]',
  };

  if (!tr[key]) {
    if (process.env.NODE_ENV === 'development') {
      return `--${key} not found--`;
    }

    return `[${key}]`;
  }

  return t(tr[key] || `[${key}]`, variables);
};
