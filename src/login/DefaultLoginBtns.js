import React from "react";

function DefaultLoginBtns({
  theme,
  setCreateNewUser,
  setLoginType,
}) {
  const roundedCorners = { borderRadius: "3px" };

  return (
    <>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor}`}
          id="existing"
          type="submit"
          style={roundedCorners}
        >
          login
        </button>
      </div>
      <div className="cell small-4">
        <button
          className={`button ${theme.btnColor}`}
          id="new"
          type="button"
          style={roundedCorners}
          onClick={() => {
            setCreateNewUser(true);
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
          style={roundedCorners}
          onClick={() => setLoginType("guest")}
        >
          guest
        </button>
      </div>
    </>
  );
}

export default DefaultLoginBtns;
