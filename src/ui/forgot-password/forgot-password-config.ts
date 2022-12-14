interface IForgotPasswordConfig {
  key: keyof IForgotPasswordFormFields;
  label: string;
  type: string;
}

export const forgotPasswordFormConfig: IForgotPasswordConfig[] = [
  {
    key: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    key: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
  },
];
