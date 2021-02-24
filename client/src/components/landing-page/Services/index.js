import React from "react";
import Icon1 from "../../../assets/images/security.svg";
import Icon2 from "../../../assets/images/react.svg";
import Icon3 from "../../../assets/images/bugs.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Technical Info</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}></ServicesIcon>
          <ServicesH2>Security</ServicesH2>
          <ServicesP>
            All data including passwords used to register new accounts are
            stored safely and properly hashed.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}></ServicesIcon>
          <ServicesH2>Built With</ServicesH2>
          <ServicesP>
            MERNG Stack (React, node.js, GraphQL, mongoDB, Express) and Semantic
            UI
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}></ServicesIcon>
          <ServicesH2>On Development</ServicesH2>
          <ServicesP>
            New features being worked on and coming out once in a while. Visit
            the Github repo for more info.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
