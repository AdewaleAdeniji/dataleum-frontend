import React from "react";
import Footer from "../landing/Footer";
import NavBar from "../layout-components/NavBar";

const PageContainer = ({ user, children, activePath, title }) => {
  if (title) {
    document.title = title;
  }
  return (
    <>
      <NavBar activePath={activePath} />
      <div className="page-container">{children}</div>
      <Footer />
    </>
  );
};
export default PageContainer;
