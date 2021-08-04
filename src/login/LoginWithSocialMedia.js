import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function LogInWithSocialMedia({
  setSocialMediaLoginData,
  setReturningUserIsValidated,
}) {
  const logout = () => {};

  const responseGoogle = (response) => {
    setSocialMediaLoginData(response.profileObj);
    setReturningUserIsValidated(true);
  };

  const responseFacebook = (response) => {
    //setSocialMediaLoginData(response);
    //setReturningUserIsValidated(true);
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
          //isSignedIn={true}
        />
      </div>
      <div className="cell small-w"><FacebookLogin
        appId="244836170795402"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <FacebookLoginButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
      /></div>
      
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
