import React from "react";

function ErrorMessage({ error }) {

  let emailError   
    if(error.message && error.message.includes("Invalid email")){
        emailError = <p>Click new user to sign up!</p>
    }

  return (
    error && (
      <div className="cell small-12 callout alert">
        <h4 style={{ fontSize: "1rem" }}>{error.message}</h4>
        {emailError? emailError: null}
      </div>
    )
  );
}

export default ErrorMessage;
