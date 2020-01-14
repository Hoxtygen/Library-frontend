import React, { Fragment } from "react";
import Books from './Books';
import Aside from "../component/Aside";
import Header from "../component/Header";

const Home = () => {
  return (
    <Fragment>
      <Aside />
      <main>
        <Header />
        <Books />
      </main>
    </Fragment>
  );
};

export default Home;
