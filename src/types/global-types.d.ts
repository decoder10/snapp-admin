type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Unknown<T> = T | unknown;

type Event = MouseEvent | TouchEvent;

type Permission = string[];

interface IKeyValueObject {
  [key: string]: string;
}

interface IPermissionsProps {
  permission: string[];
  children: React.ReactNode;
}

// type?: import('src/enums').ModalTypesEnums;
