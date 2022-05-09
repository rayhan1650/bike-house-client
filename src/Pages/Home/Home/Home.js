import React from "react";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import Offer from "../Offer/Offer";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventories />
      <Offer />
      <AboutUs />
    </div>
  );
};

export default Home;
