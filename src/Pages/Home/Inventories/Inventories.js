import React, { useEffect, useState } from "react";
import useInventories from "../../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories, setInventories] = useInventories();
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary display-4 fw-bold">
        Inventories
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {inventories.length > 6
          ? inventories
              .slice(0, 6)
              .map((inventory) => (
                <Inventory key={inventory._id} inventory={inventory} />
              ))
          : inventories.map((inventory) => (
              <Inventory key={inventory._id} inventory={inventory} />
            ))}
      </div>
    </div>
  );
};

export default Inventories;
