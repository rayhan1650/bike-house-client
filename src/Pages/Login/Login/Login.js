import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };
  return (
    <div className="my-login mx-auto">
      <h1 className="text-center mt-5 text-primary">Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-2 my-link">
        New to Tech Tutor? <Link to="/signup">Please SignUp.</Link>{" "}
      </p>
      <p className="mt-2 my-link">
        Forget Password?
        <button
          //   onClick={async () => {
          //     const email = emailRef.current.value;
          //     await sendPasswordResetEmail(email);
          //     if (email) {
          //       toast("Sent email");
          //     }
          //   }}
          className="border-0 text-primary bg-transparent"
        >
          Reset password
        </button>{" "}
      </p>
    </div>
  );
};

export default Login;