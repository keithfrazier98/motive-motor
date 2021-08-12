import React, { useEffect } from "react";
import BackToLoginBtn from "./NewUserBtns";

function SignUpWithSocialMediaMessage({
  socialMediaLoginData,
  submitCreateNewUserAPI,
  setNewUserPreferences,
  setNewUserProfileInfo,
  setCreateNewUser,
  setEmailError,
  theme_id,
  setLoginType,
  theme,
}) {
  let { type } = socialMediaLoginData;
  useEffect(() => {
    if (socialMediaLoginData) {
      //there is obviously something wrong going on here
      type = socialMediaLoginData.type;
    } else {
      type = "user";
    }
  }, [socialMediaLoginData]);

  const newUserWithSocialMedia = () => {
    setEmailError(false);
    setNewUserProfileInfo(socialMediaLoginData);
    setNewUserPreferences({ ["theme_id"]: theme_id });
    submitCreateNewUserAPI();
  };

  return (
    <div className="cell small-12 callout primary" style={{ zIndex: 2 }}>
      <h4
        style={{ fontSize: "1rem" }}
      >{`Your ${type} account is not signed up with Motive Motor`}</h4>
      <p>{`Would you like to sign up with Motive Motor with your ${type} account?`}</p>
      <BackToLoginBtn
        setLoginType={setLoginType}
        setEmailError={setEmailError}
        theme={theme}
      />
      <button
        className={`button ${theme.btnColor}`}
        style={{ borderRadius: "3px" }}
        onClick={newUserWithSocialMedia}
      >
        Yes
      </button>
    </div>
  );
}

export default SignUpWithSocialMediaMessage;
