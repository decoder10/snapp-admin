type SvgInHtml = (HTMLElement & SVGElement) | string;

interface IHeaderLanguageConfig {
  title: string;
  languageIcon: SvgInHtml;
  value: string;
}

interface IHeaderProfileMenuConfig {
  title?: string;
  link?: string;
  actionType?: TKeyOf<typeof import('enums/enums').ProfileActionTypesEnum>;
  icon?: React.ReactNode;
  component?: React.ReactNode;
}
