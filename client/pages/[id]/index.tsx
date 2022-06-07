import Layout from "@common/Layout";
import UpdateUserCom from "@components/updateUser";
import React, { ReactElement } from "react";

const UpdateUser = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
      <UpdateUserCom />
    </div>
  );
};

UpdateUser.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default UpdateUser;
