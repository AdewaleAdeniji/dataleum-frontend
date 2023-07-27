import React from "react";
import UseCaseCard from "../cards/UseCaseCard";
import FlingDown from "../common/FlingDown";

const UseCase = () => {
  return (
    <>
      <div className="usecase">
        <div className="usecase-head">
          <h3>
            The <span className="text-agcademy-blue">easiest</span> and cheapest
            way to <span className="text-agcademy-blue">buy</span> your Internet
            Data.
          </h3>
          <h6>It takes lightning 10 seconds to buy data</h6>
        </div>
        <div className="usecases">
          <div className="usecase-title">
            <h4>
              Why use <span className="text-agcademy-blue">Dataleum?</span>{" "}
            </h4>
          </div>
          <div className="usecase-row">
            <div className="usecase-column">
              <UseCaseCard
                title="Buy Data - Stay Connected"
                description="Discover a wide array of data packages offered by top service providers. Browse through various options to find the plan that perfectly aligns with your data needs and usage."
              />
              <UseCaseCard
                title="Disbursal Groups - Spread the Connection"
                description="Take the lead in fostering connectivity among your friends, family, or colleagues by creating a disbursal group."
              />
            </div>
            <div className="usecase-column two">
              <UseCaseCard
                title="Stay Connected, Anytime, Anywhere"
                description="Enjoy the freedom to access Dataleum on any device - be it desktop, tablet, or smartphone. Our platform is designed to provide a seamless user experience, no matter where you are."
              />
              <UseCaseCard
                title="Empowering Connectivity - Making a Difference "
                description="Dataleum empowers you to enable opportunities for others by providing them with access to essential data. It's more than just connectivity; it's fostering connections and possibilities."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UseCase;
