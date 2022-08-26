import { List } from "ts-toolbelt";
import { Paths } from "ts-toolbelt/out/Object/Paths";

type Join<T extends List.List, D extends string> = T extends []
  ? ""
  : T extends [(string | number | boolean)?]
  ? `${T[0]}`
  : T extends [(string | number | boolean)?, ...infer U]
  ? `${T[0]}` | `${T[0]}${D}${Join<U, D>}`
  : never;

type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never;

declare global {
  export type NestedPaths<V> = Join<Paths<V>, ".">;

  interface ObjectConstructor {
    keys<T>(o: T): ObjectKeys<T>;
  }

  interface Array<T> {
    includes(searchElement: any, fromIndex?: number): searchElement is T;
  }

  interface ReadonlyArray<T> {
    includes(searchElement: any, fromIndex?: number): searchElement is T;
  }
}
