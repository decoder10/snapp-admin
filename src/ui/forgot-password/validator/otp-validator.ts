import { Validator } from 'fluentvalidation-ts';

export class OtpValidator extends Validator<IOtp> {
  constructor() {
    super();

    this.ruleFor('otp').notEmpty().minLength(4);
  }
}
