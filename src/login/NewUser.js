import React, { useEffect } from "react";

function NewUser({ loading,
    setLoading,
    loginFormInfo,
    theme,
    setTheme,
    themeId,
    setThemeId,
    newUserProfileInfo,
    setNewUserProfileInfo,
    newUserPreferences,
    setNewUserPreferences }) {

  function handleChange({ target: { id, value } }) {
    setNewUserProfileInfo({ ...newUserProfileInfo, [id]: value })
  }

  useEffect(() => {
    setNewUserProfileInfo({...loginFormInfo})
    setNewUserPreferences({...newUserPreferences, [themeId]: themeId})
    setLoading(false);
  }, []);

  return (
    <div className="cell medium-12">
      <label htmlFor="first_name">First Name:</label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="Ricky"
        required
        onChange={handleChange}
        value={newUserProfileInfo.first_name}
      />
      <label>Last Name:</label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder="Bobby"
        required
        onChange={handleChange}
        value={newUserProfileInfo.last_name}
      ></input>
    </div>
  );
}

export default NewUser;
