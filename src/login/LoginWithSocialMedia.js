import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  GoogleLoginButton,
} from "react-social-login-buttons";

function LogInWithSocialMedia() {
  const logout = () => {};

  const responseGoogle = (response) => {
    console.log(response.email);
  };
  return (
    <>
      <div className="cell small-12">
        <GoogleLogin
          clientId="659209002109-g9b7na56k40o4a8dvfs1nim8sg4e3qo5.apps.googleusercontent.com"
          render={(renderProps) => (
              <GoogleLoginButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
      <div className="cell small-12">
        <div
          className="fb-login-button"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="true"
          data-use-continue-as="false"
        ></div>
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
