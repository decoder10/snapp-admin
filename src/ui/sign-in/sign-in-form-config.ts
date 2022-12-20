interface ISignInConfig {
  key: keyof IAuthFormFields;
  label: string;
  type: string;
  rightIcon: boolean;
}

export const signInFormConfig: ISignInConfig[] = [
  {
    key: 'email',
    label: 'Email',
    type: 'email',
    rightIcon: false,
  },
  {
    key: 'password',
    label: 'Password',
    type: 'password',
    rightIcon: true,
  },
];
