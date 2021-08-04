import React from "react";

function ReturningUserMessage({
  setLoggedIn,
  setReturningUserIsValidated,
  setLoginType,
  setLoading,
}) {
  let transition = "fadeIn";
  //returningUserIsValidated ? (transition = "fadeIn") : (transition = "fadeOut");

  const newUser = (event) => {
    if (
      window.confirm(
        "Would you like to create a new account with this email and password?"
      )
    ) {
      setLoading(true);
      setLoginType("new");
    }
  };

  return (
    <div className="cell small-12">
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
            onClick={() => {
              setReturningUserIsValidated(true);
              setLoggedIn(true);
            }}
          >
            Yes!
          </button>
          <button
            className="hollow button secondary"
            type="button"
            style={{ margin: "0 0 0 10px" }}
            onClick={newUser}
          >
            No!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturningUserMessage;
