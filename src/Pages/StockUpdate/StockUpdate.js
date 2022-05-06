import React from "react";
import { useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>StockUpdate {id}</h2>
    </div>
  );
};

export default StockUpdate;
