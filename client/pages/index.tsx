import Layout from "@common/Layout";
import Login from "@components/Login";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
      <Login />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale } : string | any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
