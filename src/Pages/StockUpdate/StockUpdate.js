import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./StockUpdate.css";

const StockUpdate = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleRestock = (event) => {
    event.preventDefault();
    const num = event.target.number.value;
    event.target.reset();
    console.log(num);
  };
  return (
    <div className="container my-stockupdate">
      <div className="card my-5 shadow">
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
                      placeholder="Enter Number"
                      type="number"
                      name="number"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
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
                <button className="btn btn-primary my-margin">Delivered</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockUpdate;
