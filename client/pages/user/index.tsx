import Layout from "@common/Layout";
import React, { ReactElement } from "react";

const User = () => {
  return <div>User </div>;
};

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default User;
