import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // confirmPassword varification
    // if (password !== confirmPassword) {
    //   setPasswordError("Password didn't match");
    //   return;
    // } else {
    //   setPasswordError("");
    //   createUserWithEmailAndPassword(email, password);
    // }
  };
  return (
    <div className="my-login mx-auto">
      <h1 className="text-center mt-5 text-primary">Please SignUp</h1>
      <Form onSubmit={handleSignUp}>
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
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
          {/* <p className="text-danger">{passwordError}</p> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
      <p className="mt-2 my-link">
        Already have an account? <Link to="/login">Please Login.</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
