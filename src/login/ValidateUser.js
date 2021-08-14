import { isExistingUser } from "../utils/api.js";

// dedicated function for handling submission of API calls
// takes the submission type (loginType) and a collection of states as an object
async function validateUser(
  submitType,
  {
    loginType,
    socialMediaLoginData,
    loginFormInfo,
    setLoginEmailIsTaken,
    setReturningUserIsValidated,
    setEmailError,
    setUserData,
    setRouteToLogin, 
    createNewUser,
    loginEmailIsTaken
  }
) {

  const abortController = new AbortController();
  let validationKey;
  let validationType;
  let pass = null
  const {type, id, email} = socialMediaLoginData
  if (loginType === "social-media") {
    switch (type) {
      case "facebook":
        validationType = "fb_login_id";
        validationKey = id;
        break;
      case "google":
        validationType = "google";
        validationKey = email;
        break;
      default:
        console.error("default social media login submission was called");
        break;
    }
  } else {
    validationType = "email";
    validationKey = loginFormInfo.email;
    pass = loginFormInfo.password

  }

  await isExistingUser(validationType, validationKey, pass, abortController.signal)
    .then((response) => {
      setLoginEmailIsTaken(true)
      setUserData({ login: response });
      setLoginEmailIsTaken(true);
      loginType === "existing" && createNewUser === true ?
      setRouteToLogin(true) :
      setReturningUserIsValidated(true)
    })
    .catch((res) => {
        setEmailError(res);
    });
}

export default validateUser;
/* if (
        (!socialMediaLoginData &&
          response.password === loginFormInfo.password &&
          submitType === "existing") ||
        submitType === "guest"
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
    */