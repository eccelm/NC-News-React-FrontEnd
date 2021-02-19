import React from 'react';
import UserContext from './UserContext'

const AppState = ({children}) =>{
return (
   <UserContext.Provider value={{
      message: "this is from the context"
   }}>
{children}
   </UserContext.Provider>
)}

export default AppState;