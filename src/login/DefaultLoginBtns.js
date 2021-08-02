import React from "react";

function DefaultLoginBtns({ theme, setSubmitNewUser, setLoginType }) {
  return (
    <>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor}`}
          id="existing"
          type="submit"
        >
          login
        </button>
      </div>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor}`}
          id="new"
          type="button"
          onClick={() => {
            setSubmitNewUser(true);
          }}
        >
          new user
        </button>
      </div>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor}`}
          id="guest"
          type="button"
          onClick={() => setLoginType("guest")}
        >
          guest
        </button>
      </div>
    </>
  );
}

export default DefaultLoginBtns;
