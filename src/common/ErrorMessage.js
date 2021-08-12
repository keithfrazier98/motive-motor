import React from "react";

function ErrorMessage({ error }) {

  let specialError   
    if(error && error.message && error.message.includes("Invalid email")){
        specialError = <p>Click new user to sign up!</p>
    } 

    else if (error && error.message && error.message.includes("Network")){
        specialError = <p>Please reload the page or come back later.</p>
    }

    

  return (
    error ?  (
      <div className="cell small-12 callout alert">
        <h4 style={{ fontSize: "1rem" }}>{error.message}</h4>
        {specialError? specialError: null}
      </div>
    ) : null
  );
}

export default ErrorMessage;
