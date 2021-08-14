const fetch = require("cross-fetch");

const API_BASE_URL = /*process.env.BASE_URL ||*/ "http://localhost:5000";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
//const headers = new Headers();
//headers.append("Content-Type", "application/json");


const headers = { "Content-Type": "application/json" };

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function isExistingUser(type, userLoginKey, password, signal) {
  //userLoginKey will be an email (for google and regular logins) or an id # (for fb users)
  //pass will be password from login form or null for social media login
  const url = `${API_BASE_URL}/logins/validate?${type}=${userLoginKey}&pass=${password}`;
  return await fetchJson(url, { headers, signal }, []);
}

export async function createNewUserAPI(newUserProfileInfo, newUserPreferences, signal) {
  const url = `${API_BASE_URL}/logins/new`;
  const options = {
    headers,
    method: "POST",
    signal,
    body: JSON.stringify({data:{...newUserProfileInfo, ...newUserPreferences}}),
  };
  return await fetchJson(url, options, [])
}
 
export async function getUserProfile(id, signal){
  const url = `${API_BASE_URL}/profiles/userdata?user_id=${id}`
  return await fetchJson(url, {headers, signal}, [])
}

export async function testConnection(signal){
  const url = `${API_BASE_URL}/test`
  return await fetchJson(url, {headers, signal}, [])
}
