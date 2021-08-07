import React, { useEffect } from "react";

function NewUser({ loading,
    setLoading,
    loginFormInfo,
    theme,
    setTheme,
    theme_id,
    setThemeId,
    newUserProfileInfo,
    setNewUserProfileInfo,
    newUserPreferences,
    setNewUserPreferences,
    handleChange,
    loginEmailIsTaken
 }) {

  useEffect(() => {
    setNewUserProfileInfo({...loginFormInfo, ...newUserProfileInfo})
    setNewUserPreferences({['theme_id']:theme_id})
    setLoading(false);
  }, [loginFormInfo, theme_id]);

  return (
      <>{loginEmailIsTaken? null :
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
      }
      </>
      
  );
}

export default NewUser;
