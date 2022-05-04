import React from "react";

const Inventory = ({ inventory }) => {
  return (
    <div>
      <h3>Items: {inventory.name}</h3>
    </div>
  );
};

export default Inventory;
