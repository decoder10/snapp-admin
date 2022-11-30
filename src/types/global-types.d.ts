type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Event = MouseEvent | TouchEvent;
type Permission = Nullable<string[]>;

interface IKeyValueObject {
  [key: string]: string;
}

interface IPermissionsProps {
  permission: Nullable<string[]>;
  children: React.ReactNode;
}

// type?: import('src/enums').ModalTypesEnums;
