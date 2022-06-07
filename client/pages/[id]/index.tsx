import Layout from "@common/Layout";
import UpdateUserCom from "@components/updateUser";
import React, { ReactElement } from "react";

const UpdateUser = () => {
  return <UpdateUserCom />;
};

UpdateUser.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default UpdateUser;
