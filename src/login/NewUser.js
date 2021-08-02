import React, { useEffect } from 'react'

function NewUser ({setLoading}) {

    useEffect(()=> {
        setLoading(false)
    },[])

    return(
        <div>lets make a new user</div>
    )

}

export default NewUser