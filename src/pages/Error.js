import React from "react";
import { Link } from "react-router-dom";
import error from "../error.jpeg";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops! The Glasses Are Empty Here...</h1>
        <Link to="/" className="btn btn-primary">
          Try Something Else...
        </Link>
        <div style={{ margin: "5rem" }}>
          <img src={error} alt="Error Banner" />
        </div>
      </div>
    </section>
  );
};

export default Error;
