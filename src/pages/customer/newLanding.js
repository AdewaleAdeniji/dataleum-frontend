import React from "react";
import Features from "../../components/landing/Features";
import HeroSection from "../../components/landing/HeroSection";
import Offer from "../../components/landing/Offer";
import Subscribe from "../../components/landing/Subscribe";
import UseCase from "../../components/landing/UseCase";
import PageContainer from "../../components/layouts/PageContainer";

const NewLandingPage = () => {
  return (
    <PageContainer title="Dataleum">
      <HeroSection />
      <Features />
      <Offer />
      <UseCase />
      <Subscribe />
    </PageContainer>
  );
};
export default NewLandingPage;
