import React from "react";
import PageContainer from "../../components/page_container/PageContainer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error404 = () => {
  return (
    <PageContainer>
      <Helmet>
        <title>Error - 404</title>
      </Helmet>
      <h1 className="w-full text-center my-24">
        This page has not been built yet.
      </h1>
      <Link
        to={"/"}
        rel="canonical"
        className="block w-1/3 mx-auto mt-4 text-center border-2 border-black p-4 hover:pointer hover:bg-black hover:text-white"
      >
        Return Home
      </Link>
    </PageContainer>
  );
};

export default Error404;
