import React from "react";
import Footer from "../landing/Footer";
import NavBar from "../layout-components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

const PageContainer = ({ user, children, activePath, title }) => {
  if (title) {
    document.title = title;
  }
  return (
    <ChakraProvider>
      <NavBar activePath={activePath} />
      <div className="page-container">{children}</div>
      <Footer />
    </ChakraProvider>
  );
};
export default PageContainer;
