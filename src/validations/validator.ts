export default class Validator {
  required(value: string | number | null | undefined): boolean {
    return !!value;
  }

  length(value: string, min: number, max: number): boolean {
    return value.length > min && value.length < max;
  }

  availability(value: string, symbols: Array<string>): boolean {
    let count = 0;
    symbols.forEach(elem => {
      if (value.includes(elem)) {
        count += 1;
      }
    });

    return count === symbols.length;
  }

  forbidden(value: string, symbols: Array<string>): boolean {
    let count = 0;
    symbols.forEach(elem => {
      if (!value.includes(elem)) {
        count += 1;
      }
    });
    return count === symbols.length;
  }

  checkPattern(value: string, reg: RegExp): boolean {
    const regexp = new RegExp(reg);
    return regexp.test(value);
  }
}
