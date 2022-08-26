import type { NextPage } from "next";

import Page from "@/components/Layout";
import { withSession } from "@/utils/session";

const Dashboard: NextPage = () => {
  return <Page>Dashboard</Page>;
};

export const getServerSideProps = withSession({ action: "RINA" });

export default Dashboard;
