import React from "react";


function BackToLoginBtn({setEmailError, setLoginType, theme}) {
  return (
    <button
      type="button"
      onClick={() => {
        setLoginType("existing");
        setEmailError(false);
      }}
      className={`button ${theme.btnColor}`}
      style={{ margin: "0 10px 0 0", borderRadius: "3px" }}
    >
      Back to Login
    </button>
  );
}

export default BackToLoginBtn;
