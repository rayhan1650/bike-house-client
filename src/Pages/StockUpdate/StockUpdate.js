import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StockUpdate = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      <h2>StockUpdate {item.name}</h2>
      <img src={item.img} alt="" />
    </div>
  );
};

export default StockUpdate;
