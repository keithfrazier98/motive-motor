import { isExistingUser } from "../utils/api.js";

// dedicated function for handling submission of API calls
// takes the submission type (loginType) and a collection of states as an object
async function CheckForReturningUser(
  submitType,
  {
    loginType,
    socialMediaLoginData,
    loginFormInfo,
    setLoginEmailIsTaken,
    setReturningUserIsValidated,
    setLoggedIn,
    setRouteToLogin,
    setEmailError,
    emailError,
    loginEmailIsTaken,
    setLoginType,
    setUserData,
  }
) {
  const abortController = new AbortController();
  let validationKey;
  let validationType;
  if (loginType === "social-media") {
    switch (socialMediaLoginData.type) {
      case "facebook":
        validationType = "fb_login_id";
        validationKey = socialMediaLoginData.id;
        break;
      case "google":
        validationType = "email";
        validationKey = socialMediaLoginData.email;
        break;
      default:
        console.error("default social media login submission was called");
        break;
    }
  } else {
    validationType = "email";
    validationKey = loginFormInfo.email;
  }

  await isExistingUser(validationType, validationKey, abortController.signal)
    .then((response) => {
      setUserData({login:response});
      setLoginEmailIsTaken(true);
      if (
        !socialMediaLoginData &&
        response.password === loginFormInfo.password &&
        submitType === "existing"
      ) {
        setReturningUserIsValidated(true);
        setLoggedIn(true);
      }
      //second submit if: user is trying to create a new user with valid login information
      else if (
        response.password === loginFormInfo.password &&
        submitType === "new"
      ) {
        setReturningUserIsValidated(true);
        setRouteToLogin(true);
      }
      // third submit if: password is incorrect on a simple login for an existing user
      else if (
        response.password !== loginFormInfo.password &&
        submitType === "existing"
      ) {
        setEmailError({ message: "Incorrect password" });
      }
      // fourth submit if : user is trying to create an account with an existing email and password is incorrect
      else if (submitType === "new" && !emailError && !loginEmailIsTaken) {
        setRouteToLogin(true);
      }
    })
    .catch((res) => {
      if (submitType !== "new") {
        setEmailError(res);
      } else {
        setLoginType("new");
      }
    });
}

export default CheckForReturningUser;
