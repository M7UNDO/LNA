import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Hero from "../components/Hero";
import ServiceContainer from "../components/ServiceContainer";

function Home() {

  return (
    <>
      <Hero/>
      <h2>Practice Areas</h2>
      <ServiceContainer/>
      <h2>Our Commitment</h2>
    </>
  );
}

export default Home;
