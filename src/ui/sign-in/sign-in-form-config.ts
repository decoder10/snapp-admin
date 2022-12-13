interface ISignInConfig {
  key: keyof IAuthFormFields;
  label: string;
  type: string;
}

export const signInFormConfig: ISignInConfig[] = [
  {
    key: 'userName',
    label: 'UserName',
    type: 'text',
  },
  {
    key: 'password',
    label: 'Password',
    type: 'password',
  },
];
