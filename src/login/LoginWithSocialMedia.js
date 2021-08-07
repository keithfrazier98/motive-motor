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
  setLoginType
}) {
  const logout = () => {};

  const preliminary = () => {
    setLoginType("social-media")
    setLoginFormInfo({email:"", password:""})
    setSocialMediaLoginData(null)
  }

  const responseGoogle = (response) => {
    preliminary()
    const {email} = response.profileObj
    setSocialMediaLoginData({type:'google', email: email})
    //submitLogin()
  };

  const responseFacebook = (response) => {
    preliminary()
    const {id} = response
    setSocialMediaLoginData({type:'facebook', id: id})
    //submitLogin()
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
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          //isSignedIn={true}
        />
      </div>
      <div className="cell small-w"><FacebookLogin
        appId="244836170795402"
        autoLoad={true}
        scope="public_profile,email"
        fields="email,first_name,last_name"
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
