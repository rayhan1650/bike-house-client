import React from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const { img, price, name, description, _id, quantity, supplier } = inventory;
  return (
    <div className="col ">
      <div className="card rounded-3 shadow h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{name}</h4>
          <span className="badge bg-success fs-4 text-start">
            Price: ${price}
          </span>
          <h5 className="mt-3">Quantity: {quantity}</h5>
          <h5>Supplier: {supplier}</h5>
          <p className="card-text my-text-justify my-2">
            {description.length > 250
              ? `${description.slice(0, 249)} ....`
              : description}
          </p>

          <Link className="mt-auto" to="/checkout">
            <button className="btn btn-primary ">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
