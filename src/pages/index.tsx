import React from "react";
import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { data } from "../../data";
import Chapters from "../components/Chapters";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <Layout data={data}>
      <Head>
        <title>Our Shift to Clean Energy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Chapters data={data} />
    </Layout>
  );
};

export default Index;
