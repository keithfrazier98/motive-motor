import React from "react";

function ErrorMessage({ error }) {
  return (
    error && (
      <div className="cell small-12 callout alert">
        <h4 style={{ fontSize: "1rem" }}>{error.message}</h4>
        <p>Click new user to sign up!</p>
      </div>
    )
  );
}

export default ErrorMessage;
