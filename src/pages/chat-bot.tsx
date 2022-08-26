import type { NextPage } from "next";

import Page from "@/components/Layout";
import { withSession } from "@/utils/session";

const ChatBot: NextPage = () => {
  return <Page>Chat Bot</Page>;
};

export const getServerSideProps = withSession({ action: "RINA" });

export default ChatBot;
