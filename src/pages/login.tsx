import type { NextPage } from "next";

import SignIn from "@/screens/sign-in";
import { withSession } from "@/utils/session";

const Login: NextPage = () => {
  return <SignIn />;
};

export const getServerSideProps = withSession({
  action: "RIA",
});

export default Login;
