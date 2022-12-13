interface ISignInConfig {
  key: keyof IAuthFormFields;
  label: string;
}

export const signInFormConfig: ISignInConfig[] = [
  {
    key: 'userName',
    label: 'UserName',
  },
  {
    key: 'password',
    label: 'Password',
  },
];
