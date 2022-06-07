import Layout from "@common/Layout";
import UserCom from "@components/UserCom";
import React, { ReactElement } from "react";

const User = () => {
  return <UserCom />;
};

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default User;
