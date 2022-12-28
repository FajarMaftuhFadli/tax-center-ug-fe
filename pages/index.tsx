import Head from "next/head";
import type { ReactElement } from "react";
import Layout from "../components/Layout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempora
          reiciendis nesciunt doloremque recusandae illo porro vitae, sint totam
          odit sequi non ad itaque quos tempore animi voluptatum vel vero!
        </div>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
