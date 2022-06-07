import Layout from "@common/Layout";
import dynamic from "next/dynamic";

import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import { getValuesById } from "src/Query";
import { dehydrate, QueryClient } from "react-query";

const UpdateUserCom = dynamic(() => import("@components/updateUser"), {
  ssr: false,
});

const UpdateUser = () => {
  return <UpdateUserCom />;
};

UpdateUser.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default UpdateUser;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["valueById", params?.id], () =>
    getValuesById(params?.id as string)
  );

  return { props: { dehydratedState: dehydrate(queryClient) } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
