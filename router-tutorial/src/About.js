import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About me</h1>
      <p>This project is example project about react router basic.</p>
      {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
