import React, { useState } from 'react'
import UserContext from './userContext'

const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState(null)
    return (
        <UserContext.Provider value = {{user,useState}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider