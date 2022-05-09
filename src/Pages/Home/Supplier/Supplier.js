import React from "react";

const Supplier = () => {
  return (
    <div className="container my-5 d-flex flex-column flex-md-row justify-content-between ">
      <img
        className="img-fluid"
        src="https://i.ibb.co/vQvY1Md/supplier.jpg"
        alt=""
      />
      <div className="px-3">
        <h2>Our Best Supplier In This Month</h2>
        <p>
          Every month we select best supplier.All of our supplier is equally
          important for us. But we want to give some inspiration to our supplier
          based on their supply. This month our best supplier is...{" "}
        </p>
        <strong className="display-4 fw-bold">Nunez</strong>
        <h5>Congratulation!!!</h5>
      </div>
    </div>
  );
};

export default Supplier;
