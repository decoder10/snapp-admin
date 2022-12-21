interface IForgotPasswordFormFields {
  password: string;
  confirmPassword: string;
}

interface IRefForgotPasswordFormFields {
  password: HTMLInputElement | null;
  confirmPassword: HTMLInputElement | null;
}
