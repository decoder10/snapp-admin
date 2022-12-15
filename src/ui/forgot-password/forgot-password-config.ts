interface IForgotPasswordConfig {
  key: keyof IForgotPasswordFormFields;
  label: string;
  type: string;
  rightIcon: boolean;
}

export const forgotPasswordFormConfig: IForgotPasswordConfig[] = [
  {
    key: 'password',
    label: 'Password',
    type: 'password',
    rightIcon: true,
  },
  {
    key: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    rightIcon: true,
  },
];
