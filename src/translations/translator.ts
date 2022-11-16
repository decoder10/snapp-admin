import { loadLocalStorage } from 'configs/local-storage';

const translator = (...args: string[]) => {
  const regex = /\[[a-zA-Z\d\s ,-_.*$%^#@&!~`]+]/g;

  const languageDictionary = loadLocalStorage('translations') || '{}';

  let finalTranslation = '';

  const _t = (key: string) => {
    const lowerCaseKey: string = key.toLowerCase();

    function getObjKey(obj: { key: string; value: string }, value: string) {
      return Object.keys(obj).find((translationKey: string) => translationKey.toLowerCase() === value);
    }

    const filterTranslation = getObjKey(languageDictionary, lowerCaseKey);

    return filterTranslation ? languageDictionary[filterTranslation] : `[${lowerCaseKey}]`;
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

  if (args) {
    args.map((arg: string) => {
      finalTranslation += translate(arg);

      return finalTranslation;
    });
  } else {
    finalTranslation = '';
  }

  return finalTranslation;
};

export const t = translator;
