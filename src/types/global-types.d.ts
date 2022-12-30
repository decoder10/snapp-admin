type Nullable<T> = T | null;
type Undefined<T> = T | undefined;
type Unknown<T> = T | unknown;
type TKeyOf<T> = keyof T;
type Order = 'asc' | 'desc';

type TFetchTypes = 'get' | 'post' | 'put' | 'delete';

// type PermissionTypes = keyof typeof import('src/enums').PermissionTypesEnum;

type Event = MouseEvent | TouchEvent;

type Permission = string[];

type Authentication = Nullable<{ token: string; refreshToken: string }>;

interface TableHeadCell {
  readonly id: keyof ITableHeadData;
  readonly label: string;
}

interface IKeyValueObject {
  [key: string]: string;
}

interface IPermissionsProps {
  permission: string[];
  children: React.ReactNode;
}

// type?: import('src/enums').ModalTypesEnums;
