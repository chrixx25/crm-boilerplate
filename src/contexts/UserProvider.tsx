import type { Decoded } from "@/global-types";

import { createStateContext } from "react-use";

const [useUser, UserProvider] = createStateContext<Decoded | {}>({});

export default UserProvider;
export { useUser };
