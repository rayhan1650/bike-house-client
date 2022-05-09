import React from "react";

const Supplier = () => {
  return (
    <div className="container my-5 d-flex flex-column flex-md-row justify-content-between bg-white shadow">
      <img
        className="img-fluid"
        src="https://i.ibb.co/vQvY1Md/supplier.jpg"
        alt=""
      />
      <div className="p-3 d-flex align-items-center">
        <div>
          <h6 className="text-secondary">About Us</h6>
          <h2 className="text-primary">We Provide You The Best Experience</h2>
          <p>
            A positive customer experience is crucial to the success of our
            business. So we provide our customer various facilities like 50%
            ontime payment, ontime product delivery, friendly behaviour etc. You
            can contact us anytime to know about us.
          </p>
          <button className="btn btn-success">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
