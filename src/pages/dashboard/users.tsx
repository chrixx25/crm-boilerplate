import type { NextPage } from "next";

import Page from "@/components/Layout";
import { withSession } from "@/utils/session";

const Users: NextPage = () => {
  return <Page>Users</Page>;
};

export const getServerSideProps = withSession({ action: "RINA" });

export default Users;
