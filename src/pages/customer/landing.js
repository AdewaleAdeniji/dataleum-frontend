import React from "react";
import HeroSection from "../../components/landing/HeroSection";
import PageContainer from "../../components/layouts/PageContainer";

const LandingPage = () => {
  return (
    <PageContainer title="Dataleum">
      <HeroSection />
      {/* <Features />
      <Offer />
      <UseCase />
      <Subscribe /> */}
    </PageContainer>
  );
};
export default LandingPage;
