import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Hero from "../components/Hero";
import ServiceContainer from "../components/ServiceContainer";

function Home() {

  return (
    <>
      <Hero/>
      <ServiceContainer/>
    </>
  );
}

export default Home;
