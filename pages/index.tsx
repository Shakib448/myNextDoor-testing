import Layout from "@common/Layout";
import Login from "@components/Login";
import { ReactElement } from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
      <Login />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="i18 next">{page}</Layout>;
};
