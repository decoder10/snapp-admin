type SvgInHtml = (HTMLElement & SVGElement) | string;

interface IHeaderLanguageConfig {
  title: string;
  languageIcon: SvgInHtml;
  value: string;
  clickHandler: () => void;
}

interface IHeaderProfileMenuConfig {
  title?: string;
  link?: string;
  actionType?: keyof typeof import('enums/enums').ProfileActionTypesEnum;
  icon?: React.ReactNode;
  component?: React.ReactNode;
}
