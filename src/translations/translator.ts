import { loadLocalStorage } from 'configs/local-storage';

// saveLocalStorage('translations', {
//   signInPasswordDigitsRange: 'Pass must be ${this.minLength} - ${this.maxLength} digits',
// });

const translator = (key: string, variables?: (string | number)[]) => {
  const regex = /\[[a-zA-Z\d\s ,-_.*$%^#@&!~`]+]/g;

  const languageDictionary = loadLocalStorage('translations') || {};

  const _t = (key: string) => {
    const lowerCaseKey: string = key.toLowerCase();
    let finalTranslation = '';
    let matches: string[] = [];

    function getObjKey(obj: { aaa: string }, value: string) {
      return Object.keys(obj).find((translationKey: string) => translationKey.toLowerCase() === value);
    }

    const filterTranslation = getObjKey(languageDictionary, lowerCaseKey);

    if (filterTranslation) {
      finalTranslation = languageDictionary[filterTranslation];
      matches = languageDictionary[filterTranslation].match(/\$\{(.*?)\}/gm);
    }

    if (matches && matches.length && variables?.length) {
      matches.forEach((item: string, index: number) => {
        finalTranslation = finalTranslation.replace(item, <string>variables[index] || item);
      });
    }

    return filterTranslation ? finalTranslation : `[${lowerCaseKey}]`;
  };

  const translate = (arg: string, depth = 10): string => {
    let matchCount = 0;

    if (depth <= 0) {
      return arg;
    }

    const textResult = arg.replace(regex, match => {
      const textKey: string = match.substring(1, match.length - 1);

      matchCount += 1;

      return _t(textKey);
    });

    return matchCount > 0 ? translate(textResult, depth - 1) : arg;
  };

  if (key) {
    return translate(key);
  } else {
    return '';
  }
};

export const t = translator;
