import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {error ? <p className="text-danger">Error: {error.message}</p> : <p></p>}
      <div className="d-flex flex-column w-75 mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-info rounded-pill fw-bold"
        >
          <FcGoogle className="me-2 fs-4 " /> Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
