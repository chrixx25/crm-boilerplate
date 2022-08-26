import type { NextPage } from "next";

import Page from "@/components/Layout";
import { withSession } from "@/utils/session";
import Home from "@/screens/home";

const Main: NextPage = () => {
  return (
    <Page>
      <Home />
    </Page>
  );
};

export const getServerSideProps = withSession({ action: "RINA" });

export default Main;
