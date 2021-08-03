import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import DefaultLogin from "./DefaultLogin";
import FourOFour from "./FourOFour";
import Guest from "./Guest";
import NewUser from "./NewUser";

function LoginScreens() {
  const [loginFormInfo, setLoginFormInfo] = useState({
    email: "",
    password: "",
  });
  const [returningUserIsValidated, setReturningUserIsValidated] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [themeId, setThemeId] = useState("bw");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [theme, setTheme] = useState({
    bkgd: "",
    fontColor: "",
    secBkgd: "",
    btnColor: "",
    headerBkgd: "",
    navBkgd: "",
    container: "",
  });
  const [loginType, setLoginType] = useState("default");
  const [socialMediaLoginData, setSocialMediaLoginData] = useState({
    socialMediaType: "",
    data: "",
  });

  const history = useHistory();
  useEffect(() => {
    if (returningUserIsValidated === true && loginFormInfo) {
      history.push("./dashboard");
    }
  }, [returningUserIsValidated, loginFormInfo]);

  return (
    <>
      {loginType === "default" ? (
        <DefaultLogin
          loginFormInfo={loginFormInfo}
          setLoginFormInfo={setLoginFormInfo}
          returningUserIsValidated={returningUserIsValidated}
          setReturningUserIsValidated={setReturningUserIsValidated}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          inputType={inputType}
          setInputType={setInputType}
          themeId={themeId}
          setThemeId={setThemeId}
          loading={loading}
          setLoading={setLoading}
          emailError={emailError}
          setEmailError={setEmailError}
          theme={theme}
          setTheme={setTheme}
          loginType={loginType}
          setLoginType={setLoginType}
          socialMediaLoginData={socialMediaLoginData}
          setSocialMediaLoginData={setSocialMediaLoginData}
        />
      ) : loginType === "new" ? (
        <NewUser setLoading={setLoading}/>
      ) : loginType === "guest" ? (
        <Guest />
      ) : (
        <FourOFour />
      )}
    </>
  );
}

export default LoginScreens;
