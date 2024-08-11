import React, { createContext, useContext,  useState } from "react";
import { Loginn, signUp } from "../firebase/firebase";


const authContext = createContext()
export const AuthProvider = ({ children }) => {

        const [user,setuser]=useState([])

            const login=async(email,password)=>{
                try{
                    console.log("ttfirst",password)
              const reponse=await Loginn(email,password)
              
               await setuser(reponse)
    
              return reponse
            }
            catch{
                console.log('logerreur::',console.error())
            }
        
        };
        const signup = async (name,phone,email, password) => {
            try {
                const response = await signUp(name,phone,email, password);
               await setuser(response)
              
                return response;
            } catch (error) {
                console.error('Signup Error:', error);
                throw error; 
            }
        };
    

 
  
 

return(
<authContext.Provider value={{user,login,signup}}>
        {children}
</authContext.Provider>)
}
export const useauth=()=>{ return useContext(authContext)}
