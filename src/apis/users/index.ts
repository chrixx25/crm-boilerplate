import type { UserAuthParams, UserAuthResponse } from "./types";

import request from "utils/request";

export const signIn = (data: UserAuthParams): Promise<UserAuthResponse> => {
  const { username, password } = data;
  const options = {
    url: "users/login",
    body: {
      userName: username,
      password,
    },
  };
  return request.post(options.url, options.body);
};
