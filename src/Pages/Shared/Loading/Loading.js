import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="my-spinner d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
