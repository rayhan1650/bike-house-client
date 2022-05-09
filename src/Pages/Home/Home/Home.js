import React from "react";
import Banner from "../Banner/Banner";
import BikeRace from "../BikeRace/BikeRace";
import Inventories from "../Inventories/Inventories";
import Supplier from "../Supplier/Supplier";

const Home = () => {
  return (
    <div>
      <Banner />
      <Inventories />
      <Supplier />
      <BikeRace />
    </div>
  );
};

export default Home;
