import { tKeys } from 'translations/translation-keys';

import { Validator } from 'fluentvalidation-ts';

export class ForgotPasswordEmailValidator extends Validator<IForgotPasswordEmail> {
  constructor() {
    super();

    this.ruleFor('email')
      .notEmpty()
      .withMessage(tKeys('noEmpty'))
      .emailAddress()
      .withMessage('Please enter correct email');
  }
}
