import { startCase, toLower } from "lodash";

const normalCase = (str: string): string => startCase(toLower(str));

export default normalCase;
