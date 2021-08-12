import React from "react";

function NewUserBtns({
  setEmailError,
  setLoginType,
  theme,
  loginEmailIsTaken,
  emailError,
  submitCreateNewUserAPI,
  loginType,
}) {
  const newUserBtns = (
    <>
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

      {
        //this conditional will turn off the submit button on SignUpWithSocialMedia sign is on
        loginType === "new" ? (
          <button
            type="button"
            id="create_user"
            style={{ margin: "0" }}
            onClick={
              loginEmailIsTaken || emailError ? null : submitCreateNewUserAPI
            }
            className={`${
              loginEmailIsTaken || emailError ? "button disabled" : "button"
            } ${theme.btnColor} roundedCorners`}
          >
            submit
          </button>
        ) : null
      }
    </>
  );

  //the new SignUpWithSocialMediaMessage doesnt require a div with cell class
  return loginType === "new" ? (
    <div className="cell small-12">{newUserBtns}</div>
  ) : (
    newUserBtns
  );
}

export default NewUserBtns;
