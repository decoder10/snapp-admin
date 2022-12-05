type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Unknown<T> = T | unknown;
type TKeyOf<T> = keyof T;

// type PermissionTypes = keyof typeof import('src/enums').PermissionTypesEnum;

type Event = MouseEvent | TouchEvent;

type Permission = string[];

type Authentication = Nullable<{ token: string; refreshToken: string }>;

interface IKeyValueObject {
  [key: string]: string;
}

interface IPermissionsProps {
  permission: string[];
  children: React.ReactNode;
}

// type?: import('src/enums').ModalTypesEnums;
