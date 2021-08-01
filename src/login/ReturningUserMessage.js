import React from "react";

function ReturningUserMessage ({returningUserIsValidated, setReturningUserIsValidated}){
    let transition = "fadeIn";
    //returningUserIsValidated ? (transition = "fadeIn") : (transition = "fadeOut");

    return (
      <div className = "cell small-12">
        <div className={`grid-x fluid callout primary ${transition}`}>
          <div className="cell small 12">
            <h4 style={{ fontSize: "1rem" }}>
              Your email already is being used for another account.
            </h4>
          </div>
          <div className="cell small 12">
            <p>Would you like to login instead?</p>
          </div>
          <div className="cell small 12">
            <button
              className="hollow button primary"
              type="submit"
              style={{ margin: "0 10px 0 0" }}
              onClick={()=>{setReturningUserIsValidated(true)}}
            >
              Yes!
            </button>
            <button
              className="hollow button secondary"
              type="button"
              style={{ margin: "0 0 0 10px" }}
            >
              No!
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default ReturningUserMessage