import { set, get, last } from "lodash";

const flatPick = (object: Record<string, any>, paths): Record<string, any> => {
  const o = {};

  paths.forEach((path) => set(o, last(path.split(".")), get(object, path)));

  return o;
};

export default flatPick;
