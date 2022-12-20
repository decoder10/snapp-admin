import { tKeys } from 'translations/translation-keys';

import { Validator } from 'fluentvalidation-ts';

export class SignInValidator extends Validator<IAuthFormFields> {
  private minLength = 8;
  private maxLength = 12;

  constructor() {
    super();

    this.ruleFor('email').notEmpty().emailAddress().withMessage('Please enter correct email');

    this.ruleFor('password')
      .minLength(this.minLength)
      .withMessage(tKeys('signInPasswordDigitsRange', [this.minLength, this.maxLength]))
      .maxLength(this.maxLength)
      .withMessage(`Pass must be ${this.minLength} - ${this.maxLength} digits`);
  }
}
