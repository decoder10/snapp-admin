type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Event = MouseEvent | TouchEvent;

interface IPermissionsProps {
  permission: Nullable<Array<string>>;
  children: React.ReactNode;
}

interface ITabsProps {
  title: string;
  key: string;
  tabContent: React.ReactNode;
}

interface IGameUrlInfoParamsProps {
  language: Nullable<string>;
  mode: Nullable<string>;
  gameID: Nullable<string>;
  token: Nullable<string>;
  exitUrl: Nullable<string>;
  depositUrl: Nullable<string>;
}

interface IKeyValueObject {
  [key: string]: string;
}

interface IModalProps {
  title?: string;
  width?: string;
  className?: string;
  type?: import('src/enums').ModalTypesEnums;
  modalOpen: boolean;
  content: React.ReactNode;
  enableHorizontalScroll?: boolean;
  enableVerticalScroll?: boolean;
  outsideClick?: boolean;
}
