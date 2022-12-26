import arm from 'assets/images/arm.svg';
import eng from 'assets/images/eng.svg';
import rus from 'assets/images/rus.svg';

type LanguageConfig = Omit<IHeaderLanguageConfig, 'clickHandler'>;

export const headerLanguageConfig: LanguageConfig[] = [
  // todo should be taken from backEnd
  {
    title: 'Eng',
    languageIcon: eng,
    value: 'eng',
  },
  {
    title: 'Arm',
    languageIcon: arm,
    value: 'arm',
  },
  {
    title: 'Rus',
    languageIcon: rus,
    value: 'rus',
  },
];
