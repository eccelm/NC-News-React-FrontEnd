import {getUserByUsername} from '../api'

export async function login(username){

let user = await getUserByUsername(username)
console.log(user)
   /*

*/


}

/*

*/
export async function logout(){
   /*
   Needs to set the username back to guest
   
   */
   
   
   }