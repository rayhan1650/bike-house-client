import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./StockUpdate.css";

const StockUpdate = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const url = `https://secure-reef-15878.herokuapp.com/inventory/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);

  const handleRestock = (event) => {
    event.preventDefault();
    const number = parseInt(event.target.number.value);
    const newQuantity = parseInt(item.quantity) + number;
    const updatedQuantity = { quantity: newQuantity };

    //send data to server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      });
  };
  const handleDelevered = (event) => {
    if (parseInt(item.quantity) > 0) {
      const newQuantity = parseInt(item.quantity) - 1;
      const updatedQuantity = { quantity: newQuantity };

      //send data to server
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {});
    } else {
      alert("This item is out of stock");
    }
  };
  return (
    <div className="container mb-3 my-stockupdate">
      <div className="card my-3 shadow">
        <div className="row g-0 ">
          <div className="col-md-4 p-2 d-flex justify-content-center align-items-center">
            <img src={item.img} className="img-fluid " alt="..." />
          </div>
          <div className="col-md-8 bg-primary bg-opacity-25">
            <div className="card-body ">
              <h4 className="card-title">{item.name}</h4>
              <span className="badge bg-success">Price: ${item.price}</span>
              <h5 className="mt-3">Supplier: {item.supplier}</h5>
              <h5>Quantity: {item.quantity}</h5>
              <p className="card-text my-text-justify">
                <strong>Description:</strong>
                {item.description}
              </p>

              <div className="card-text d-flex flex-column flex-md-row justify-content-between">
                <Form onSubmit={handleRestock}>
                  <InputGroup className="w-auto">
                    <FormControl
                      placeholder="Enter Quantity"
                      type="number"
                      name="number"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      required
                    />
                    <Button
                      type="submit"
                      variant="outline-primary"
                      id="button-addon2"
                    >
                      Restock
                    </Button>
                  </InputGroup>
                </Form>
                <button
                  onClick={handleDelevered}
                  className="btn btn-primary my-margin"
                >
                  Delivered
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link className="btn btn-success" to="/manageinventories">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default StockUpdate;
