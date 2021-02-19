import React from 'react';
import UserContext from './UserContext'

const UserState = ({children}) =>{
return (
   <UserContext.Provider value={{
      message: "this is from the context"
   }}>
{children}
   </UserContext.Provider>
)}

export default UserState;