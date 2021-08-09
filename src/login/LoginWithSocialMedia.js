import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function LogInWithSocialMedia({
  setSocialMediaLoginData,
  submitLogin,
  setLoginFormInfo,
  setLoginType,
  setEmailError,
  loginType,
}) {
  const logout = () => {};

  const preliminary = () => {
    setLoginFormInfo({ email: "", password: "" });
    setSocialMediaLoginData(false);
  };

  const responseGoogle = (response) => {
    preliminary();
    const { email } = response.profileObj;
    setSocialMediaLoginData({ type: "google", email: email });
    setLoginType("social-media");
  };

  const failureGoogle = () => {
    setEmailError({
      message:
        "A problem occured when trying to login with google. Please try again.",
    });
  };

  const responseFacebook = (response) => {
    preliminary();
    console.log(response)
    const { id } = response;
    setSocialMediaLoginData({ type: "facebook", id: id });
    setLoginType("social-media")
  };

  return (
    <>
      <div className="cell small-12">
        <GoogleLogin
          clientId="659209002109-g9b7na56k40o4a8dvfs1nim8sg4e3qo5.apps.googleusercontent.com"
          render={(renderProps) => (
            <GoogleLoginButton
              text={
                loginType === "new"
                  ? "Sign up with Google"
                  : "Log in with Google"
              }
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          onSuccess={(response) => {
            responseGoogle(response);
          }}
          onFailure={(response) => {
            setLoginFormInfo({ email: "", password: "" });
            failureGoogle(response);
          }}
          cookiePolicy={"single_host_origin"}
          //isSignedIn={true}
        />
      </div>
      <div className="cell small-w">
        <FacebookLogin
          appId="244836170795402"
          autoLoad={true}
          scope="public_profile,email"
          fields="email,first_name,last_name"
          callback={responseFacebook}
          render={(renderProps) => (
            <FacebookLoginButton
              text={
                loginType === "new"
                  ? "Sign up with Facebook"
                  : "Log in with Facebook"
              }
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
        />
      </div>

      <div>
        <GoogleLogout
          clientId="659209002109-g9b7na56k40o4a8dvfs1nim8sg4e3qo5.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </div>
    </>
  );
}

export default LogInWithSocialMedia;
