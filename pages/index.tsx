import Layout from "@common/Layout";
import Login from "@components/Login";
import { ReactElement } from "react";

const Home = () => {
  return <Login />;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};
