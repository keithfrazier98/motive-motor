import React from "react";
import { Link } from "react-router-dom";

function DefaultLoginBtns({
  theme,
  setCreateNewUser,
  setLoginType,
  fetchError,
}) {
  const roundedCorners = { borderRadius: "3px" };

  return (
    <>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor} ${fetchError ? "disabled" : ""}`}
          id="existing"
          type="submit"
          style={roundedCorners}
        >
          login
        </button>
      </div>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor} ${fetchError ? "disabled" : ""}`}
          id="new"
          type="button"
          style={roundedCorners}
          onClick={
            fetchError
              ? null
              : () => {
                  setCreateNewUser(true);
                  setLoginType("new");
                }
          }
        >
          new user
        </button>
      </div>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor} ${fetchError ? "disabled" : ""}`}
          id="guest"
          type="button"
          style={roundedCorners}
          onClick={() => (fetchError ? null : setLoginType("guest"))}
        >
          <Link style={{ color: "white" }} to={"/dashboard/guest"}>
            guest
          </Link>
        </button>
      </div>
    </>
  );
}

export default DefaultLoginBtns;
