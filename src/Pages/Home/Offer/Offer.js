import React from "react";

const Offer = () => {
  return (
    <div className="container d-flex flex-column-reverse flex-md-row justify-content-between bg-white shadow">
      <div className="text-center px-3 py-2 d-flex align-items-center">
        <div>
          <h2 className="text-primary">SAVE UPTO $1000 EVERY MONTH</h2>
          <p className="fs-5 my-text-justify text-secondary">
            <i>
              We are going to start a new offer for our wholesale customer.
              Every month one customer will save $1000 according to our offer.
              To participate this offer,we highly encourage our valuable
              customer to buy highest amount of product. The customer who will
              buy highest amount of product, will get the reward.
            </i>
          </p>
          <span className="badge bg-success rounded-pill fs-6">
            Hurry Up!!!
          </span>
        </div>
      </div>

      <img
        className="img-fluid"
        src="https://i.ibb.co/xMWsdj5/biked.jpg"
        alt=""
      />
    </div>
  );
};

export default Offer;
