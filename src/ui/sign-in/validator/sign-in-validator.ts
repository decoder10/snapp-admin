import { Validator } from 'fluentvalidation-ts';

export class SignInValidator extends Validator<IAuthFormFields> {
  private minLength = 8;
  private maxLength = 12;

  constructor() {
    super();

    this.ruleFor('userName').notEmpty().withMessage('Please enter your userName');

    this.ruleFor('password')
      .minLength(this.minLength)
      .withMessage(`Pass must be ${this.minLength} - ${this.maxLength} digits`)
      .maxLength(this.maxLength)
      .withMessage(`Pass must be ${this.minLength} - ${this.maxLength} digits`);
  }
}
