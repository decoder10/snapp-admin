import { tKeys } from 'translations/translation-keys';

import { Validator } from 'fluentvalidation-ts';

export class ForgotPasswordValidator extends Validator<IForgotPasswordFormFields> {
  private minLength = 8;
  private maxLength = 12;

  constructor() {
    super();

    this.ruleFor('password')
      .notEmpty()
      .withMessage(tKeys('noEmpty'))
      .minLength(this.minLength)
      .withMessage(`Pass must be ${this.minLength} - ${this.maxLength} digits`)
      .maxLength(this.maxLength)
      .withMessage(`Pass must be ${this.minLength} - ${this.maxLength} digits`);

    this.ruleFor('confirmPassword')
      .must((value, field) => {
        return value === field.password;
      })
      .withMessage(tKeys('mustBeSame'));

    this.ruleFor('otp').notEmpty().minLength(4);
  }
}
