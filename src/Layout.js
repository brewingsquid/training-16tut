import React from "react";
import { DataProvider } from "./context/DataContext";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default Layout;
