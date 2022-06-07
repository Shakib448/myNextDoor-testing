import Layout from "@common/Layout";
import UserCom from "@components/UserCom";
import { GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { getValues } from "src/Query";

const User = ({ values }: any) => {
  return <UserCom values={values} />;
};

User.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default User;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getValues();

  return { props: { values: data } };
};
