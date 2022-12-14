interface ISignInConfig {
  key: keyof IAuthFormFields;
  label: string;
  type: string;
  rightIcon: boolean;
}

export const signInFormConfig: ISignInConfig[] = [
  {
    key: 'userName',
    label: 'UserName',
    type: 'text',
    rightIcon: false,
  },
  {
    key: 'password',
    label: 'Password',
    type: 'password',
    rightIcon: true,
  },
];
