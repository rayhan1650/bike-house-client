import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const { img, price, name, description, _id, quantity, supplier } = inventory;
  const navigate = useNavigate();

  const stockUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="col ">
      <div className="card rounded-3 shadow h-100">
        <img src={img} className="card-img-top" alt="Inventory item's img" />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{name}</h4>
          <span className="badge bg-success fs-4 text-start">
            Price: ${price}
          </span>
          <h5 className="mt-3">Quantity: {quantity}</h5>
          <h5>Supplier: {supplier}</h5>
          <p className="card-text my-text-justify my-2">
            {description.length > 180
              ? `${description.slice(0, 180)} ....`
              : description}
          </p>

          <button
            title="Stock Update"
            onClick={() => stockUpdate(_id)}
            className="btn btn-primary mt-auto"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
