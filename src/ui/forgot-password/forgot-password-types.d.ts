interface IForgotPasswordFormFields {
  password: string;
  confirmPassword: string;
  otp: string;
}

interface IRefForgotPasswordFormFields {
  password: HTMLInputElement | null;
  confirmPassword: HTMLInputElement | null;
  otp: HTMLInputElement | null;
}
