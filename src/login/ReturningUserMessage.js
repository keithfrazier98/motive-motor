import React, { useEffect } from "react";

function ReturningUserMessage({
  setLoggedIn,
  returningUserIsValidated,
  setLoginType,
  setLoading,
  setEmailError,
  setRouteToLogin
}) {
  let transition = "fadeIn";
  //returningUserIsValidated ? (transition = "fadeIn") : (transition = "fadeOut");

  useEffect(() => {
    setEmailError(false)
  }, [])

  const newUser = (event) => {
    if (
      window.confirm(
        "Would you like to create a new account with this email and password?"
      )
    ) {
      setLoginType("new");
      setRouteToLogin(false)
      setEmailError({message:"Someone is already using this email, please use another."})
    }
  };

  return (
    <div className="cell small-12">
      <div className={`grid-x fluid callout primary ${transition}`}>
        <div className="cell small 12">
          <h4 style={{ fontSize: "1rem" }}>
            Your email already is already signed up.
          </h4>
        </div>
        <div className="cell small 12">
          <p>Would you like to login instead?</p>
        </div>
        <div className="cell small 12">
          <button
            className="hollow button primary"
            type="button"
            style={{ margin: "0 10px 0 0" }}
            onClick={() => {
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
