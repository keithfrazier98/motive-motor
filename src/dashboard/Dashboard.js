import React, { useEffect } from "react";
import {useHistory} from "react-router-dom"

function Dashboard({ userData }) {
    const history = useHistory()

    useEffect(() => {
        if(!userData){
            history.push("/login")
        }
        console.log(userData)
    })

  return (
    <>
      <div className="grid-x grid-margin-x align-center align-middle">
        <div className="cell small-12">
          <h1> welcome to your dashboard</h1>
        </div>
        <div className="cell small-12">
        <p> here is you in a nutshell:</p>
        <p>{JSON.stringify(userData)}</p>
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
