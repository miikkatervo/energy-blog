import React from "react";
import { NextPage } from "next";
import { Layout } from "../components/Layout";
import { data } from "../../data";
import Chapters from "../components/Chapters";

const Index: NextPage = () => {
  return (
    <Layout data={data}>
      <Chapters data={data} />
    </Layout>
  );
};

export default Index;
