import {getUserByUsername} from '../api'

export function login(username) {
   console.log(username);
   getUserByUsername(username)
      .then((user) => {
         console.log(user);
         setUser(user)
         console.log(user)
      })
      .catch((err) => {
         console.log(err);
      });

}

/*

*/
export async function logout(){
   /*
   Needs to set the username back to guest
   
   */
   
   
   }