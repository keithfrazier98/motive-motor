import React from "react";

function NewUserBtns({
  setEmailError,
  setLoginType,
  theme,
  loginEmailIsTaken,
  emailError,
  loginType,
  setCreateNewUser,
  setLoginEmailIsTaken,
  setRouteToLogin,
  setLoading,
  setReturningUserIsValidated,
  setSocialMediaLoginData,
  setLoggedIn
}) {
  const backToLogin = () => {
    setLoading(false);
    setEmailError("");
    setReturningUserIsValidated(false);
    setLoginType("existing");
    setSocialMediaLoginData(false);
    setLoggedIn(false);
    setRouteToLogin(false);
    setCreateNewUser(false);
    setLoginEmailIsTaken(false);
  };
  
  const newUserBtns = (
    <>
      <button
        type="button"
        onClick={() => {
          backToLogin()
        }}
        className={`button ${theme.btnColor}`}
        style={{ margin: "0 10px 0 0", borderRadius: "3px" }}
      >
        Back to Login
      </button>

      {
        //this conditional will turn off the submit button when SignUpWithSocialMedia sign is on
        loginType === "new" ? (
          <button
            type="button"
            id="create_user"
            style={{ margin: "0" }}
            onClick={
              loginEmailIsTaken || emailError
                ? null
                : () => {
                    setCreateNewUser(true);
                  }
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
