type SvgInHtml = (HTMLElement & SVGElement) | string;

interface IHeaderLanguageConfig {
  title: string;
  languageIcon: SvgInHtml;
  value: string;
}
