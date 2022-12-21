interface ISignInConfig {
  key: keyof IAuthFormFields;
  label: string;
  type: string;
  rightIcon: boolean;
}

export const signInFormConfig: ISignInConfig[] = [
  {
    key: 'email',
    label: 'email',
    type: 'email',
    rightIcon: false,
  },
  {
    key: 'password',
    label: 'password',
    type: 'password',
    rightIcon: true,
  },
];
