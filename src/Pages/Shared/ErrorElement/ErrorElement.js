import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div>
      <h1 className="text-red-600">{error.status}</h1>
      <p className="text-red-600">{error.statusText || error.message}</p>
      <button>
        <Link to="/" className="btn btn-primary text-white">
          {" "}
          Go to Homepage
        </Link>
      </button>
    </div>
  );
};

export default ErrorElement;
