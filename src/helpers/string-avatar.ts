import { first } from "lodash";

const stringAvatar = (firtsName: string, LastName: string): string =>
  `${first(firtsName) || ""}${first(LastName) || ""}`;

export default stringAvatar;
